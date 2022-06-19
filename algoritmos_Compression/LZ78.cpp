#include <bits/stdc++.h>
#include <list>
#include <bitset>
#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
#include <queue>

using namespace std;

string encode_int(int in)
{
  return bitset<8>(in).to_string();
}

int decode_int(char out)
{
  return bitset<8>(out).to_ulong();
}

string encode_char(string in)
{
  return bitset<8>(in[0]).to_string();
}

char decode_char(string out)
{
  return (char)bitset<8>(out).to_ulong();
}

struct Dict
{
  string label; // dictionary entry string
  char output;  // first non-matching symbol
  int entry;    // longest matching dictionary entry

  Dict(string label, int entry, char output) // constructor
  {
    this->label = label;
    this->entry = entry;
    this->output = output;
  }
};

int find(string l, list<Dict> enc_list)
{ // change list to map

  list<Dict> temp = enc_list;
  int i = 1;

  while(!temp.empty())
  {
      if(!(l.compare(temp.front().label)))
      {
          return i;
      }
      temp.pop_front();
      i++;
  }
  return -1;
}

void write_file(string input, string output_filename)
{
  string one_byte;
  unsigned long bin_number;
  unsigned char chr;
  int i, len = input.length();

  FILE *fp;
  fp = fopen(output_filename.c_str(), "wb");

  if(fp == NULL)
  {
    printf("Unable to open output file!\n");
    return;
  }

  for (i=0; i<len; i+= 8)
  {
    one_byte = input.substr(i, 8);
    bin_number = strtol(one_byte.c_str(), NULL, 2);

    chr = bin_number;
    fprintf(fp, "%c", bin_number);
  }

  fclose(fp);
}

void LZ78_Compress(string txt, string output_filename)
{
  list <Dict> Dictionary;
  string Prefix = "", Char, compressed;

  int CodeWord, IndexForPrefix = 1, len, i;

  len = txt.length();


  for(i=0; i<len; i++){

     Char = string(1, txt[i]);

     IndexForPrefix = find((Prefix + Char), Dictionary);  // if it equals to -1, it means (Prefix + Char) is not in the dictionary
     if(IndexForPrefix != -1)
     {    
         Prefix = Prefix + Char; // if  Prefix + Char already exists, append Char
     }

     else
     {
        if(Prefix.empty())
        {
          CodeWord = 0;           // if Prefix is empty, a new letter was processed
          compressed += "00000000";
        }
        else
        {
          CodeWord = find(Prefix, Dictionary);     // search Prefix index
          compressed += encode_int(CodeWord);       // encode index
        }

        compressed += encode_char(Char);                                // encode char
        Dictionary.push_back(Dict((Prefix + Char), CodeWord, txt[i])); // add new entry to the dictionary
        Prefix.clear();      
     }
  } 

  write_file(compressed, output_filename);
}

void LZ78_Decompress(string input_filename, string output_filename)
{
  // Decompression Variables
  string dict = "";
  string decompressed_text;      // the the decomressed string
  string compressed_text;        // the compressed input
  string character;              // the character immediately after the current codeword
  string temp;                   

  unsigned char ch;
  unsigned int codeword, l = 0, i, len;           // the current dictionary entry being processed

  FILE *fp;
  fp = fopen(input_filename.c_str(), "rb");

  if(fp == NULL)
  {
    printf("Unable to open compressed file!\n");
    return;
  }


  while(fscanf(fp, "%c", &ch) == 1)
  {
    compressed_text += ch;
  }
  len = compressed_text.length();

  fclose(fp);

  ofstream outfile(output_filename.c_str(), ios::binary);

  int *idx = new int[len]; // used for storing the index of the i-th dictionary entry

  for (i=0;i<len;i+=2)
  {
    codeword = compressed_text[i];                      // longest matching dictionary entry
    character = compressed_text.substr(i + 1, 1);       // first non-matching symbol
    dict += character;                           
    idx[l] = codeword;
    l++; // idx size

    // let's say l = 0
    // then (idx[0], dict[0]) represents the first dictionary entry

    if(codeword == 0)
    {
        decompressed_text += character; // new letter, just append
    }

    else
    {      
       while(codeword > 0)  // go back in the dictionary string, adding each letter until you get one with codeword = 0
       {
        temp += dict[codeword-1];
        codeword = idx[codeword-1];
       }
       reverse(temp.begin(), temp.end()); // restore correct order
       decompressed_text += temp;         // append string and char
       decompressed_text += character;
       temp.clear();
    }
  }
  outfile << decompressed_text;
  outfile.close();
}


void Compress(string input_filename, string output_filename)
{
  ifstream in(input_filename.c_str());
  string line, txt;

  while(getline(in, line))
  {
    txt += line;
    txt += "\n";
  }
  in.close();

  LZ78_Compress(txt, output_filename);
}
