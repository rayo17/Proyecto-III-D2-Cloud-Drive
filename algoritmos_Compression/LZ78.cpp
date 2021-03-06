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
  string label; // entrada de diccionario string
  char output;  // primer simbolo que no se repite
  int entry;    // entry entrada de diccionario mas larga

  Dict(string label, int entry, char output) // constructor
  {
    this->label = label;
    this->entry = entry;
    this->output = output;
  }
};

int find(string l, list<Dict> enc_list)
{ // cambia de lista a mapa 

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

// Funcion de escritura en binario para el archivo
void write_file(string input, string output_filename)
{
  string one_byte;
  unsigned long bin_number;
  unsigned char chr;
  int i, len = input.length();

  FILE *fp;
  fp = fopen(output_filename.c_str(), "wb");

  // revisa si hay archivos txt. con el nombre electo
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

//Funcion de algoritmo de compresion
void LZ78_Compress(string txt, string output_filename)
{
  list <Dict> Dictionary;
  string Prefix = "", Char, compressed;

  int CodeWord, IndexForPrefix = 1, len, i;

  len = txt.length();


  for(i=0; i<len; i++){

     Char = string(1, txt[i]);

     IndexForPrefix = find((Prefix + Char), Dictionary);  // si es igual a -1 la trie no esta en el diccionario actual
     if(IndexForPrefix != -1)
     {    
         Prefix = Prefix + Char; // si la trie existe hace un append Char
     }

     else
     {
        if(Prefix.empty())
        {
          CodeWord = 0;           // si el prefijo esta vacio se proceso una letra nueva 
          compressed += "00000000";
        }
        else
        {
          CodeWord = find(Prefix, Dictionary);     // busca el prefijo en el indice
          compressed += encode_int(CodeWord);       // encode indice
        }

        compressed += encode_char(Char);                                // encode char
        Dictionary.push_back(Dict((Prefix + Char), CodeWord, txt[i])); // nueva entrada al diccionario
        Prefix.clear();      
     }
  } 

  write_file(compressed, output_filename);
}

void LZ78_Decompress(string input_filename, string output_filename)
{
 
  string dict = "";
  string decompressed_text;      // string descomprmida
  string compressed_text;        // input comprmido
  string character;              // simbolo que le sigue al codeword
  string temp;                   

  unsigned char ch;
  unsigned int codeword, l = 0, i, len;           

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

  int *idx = new int[len]; // guarda el indice de la entrada i-esima en el diccionario

  for (i=0;i<len;i+=2)
  {
    codeword = compressed_text[i];                      // entrada mas larga que clasa en el diccionario
    character = compressed_text.substr(i + 1, 1);       // primer simbolo que no calza
    dict += character;                           
    idx[l] = codeword;
    l++; // idx size


    if(codeword == 0)
    {
        decompressed_text += character; 
    }

    else
    {      
       while(codeword > 0)  //  recorre el diccionario hasta que el ultimo indice sea 0
       {
        temp += dict[codeword-1];
        codeword = idx[codeword-1];
       }
       reverse(temp.begin(), temp.end()); 
       decompressed_text += temp;        
       decompressed_text += character;
       temp.clear();
    }
  }
  outfile << decompressed_text;
  outfile.close();
}

// funcion para ejecutar la compression
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
