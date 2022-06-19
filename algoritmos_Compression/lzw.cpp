/**
 * LZW.cpp
 * @authors Justin Fernández, Valerin Calderón, Daniel Rayo, Felipe Viales
 * @version 1
 */

#include "lzw.h"

/**
 *
 * @return
 */
string LZW::compressFile(string filePath) {
    string myText=readFileLZW(filePath);
    vector<int> myCodes= LZWencoding(myText);
    return transformCodesToString(myCodes);
}

/**
 *
 * @param vectorOfCodes
 */
string LZW::uncompressFile(string vectorOfCodes) {
    vector<int> mySecondCodes = transformStringToCodes(vectorOfCodes);
    return LZWdecode(mySecondCodes);
}


string LZW::readFileLZW(string filePath) {
    ifstream file;
    file.open(filePath,std::ios::in |std::ios::binary);
    string texto="";
    char ch;
    while(file.get(ch)){
        texto+=ch;
    }
    file.close();
    return texto;
}

vector<int> LZW::LZWencoding(string s1) {
    unordered_map<string, int> table;
    for(int i = 0; i <= 255; i++) {
        string ch = "";
        ch += char(i);
        table[ch] = i;
    }

    string p = "", c = "";
    p += s1[0];
    int code = 256;
    vector<int> output_code;
    for (int i = 0; i < s1.length(); i++) {
        if (i != s1.length() - 1)
            c += s1[i + 1];
        if (table.find(p + c) != table.end()) {
            p = p + c;
        }
        else {
            output_code.push_back(table[p]);
            table[p + c] = code;
            code++;
            p = c;
        }
        c = "";
    }
    output_code.push_back(table[p]);
    return output_code;
}

string LZW::transformCodesToString(vector<int> codes) {
    string vectorOfCodes="";
    for(int i=0;i<codes.size();i++){
        vectorOfCodes+=to_string(codes[i])+" ";
    }
    return vectorOfCodes;
}

vector<int> LZW::transformStringToCodes(string vectorOfCodes) {
    vector<int> codes;
    string tempNumber="";
    for(int i=0;i<vectorOfCodes.size();i++){
        if(vectorOfCodes.at(i) != ' '){
            tempNumber+= vectorOfCodes[i];
        }else{
            codes.push_back(stoi(tempNumber));
            tempNumber="";
        }
    }
    return codes;
}

string LZW::LZWdecode(vector<int> theCodes) {
    string textToReturn;
    unordered_map<int, string> table;
    for (int i = 0; i <= 255; i++) {
        string ch = "";
        ch += char(i);
        table[i] = ch;
    }
    int old = theCodes[0], n;
    string s = table[old];
    string c = "";
    c += s[0];
    textToReturn+= s;
    int count = 256;
    for (int i = 0; i < theCodes.size() - 1; i++) {
        n = theCodes[i + 1];
        if (table.find(n) == table.end()) {
            s = table[old];
            s = s + c;
        }
        else {
            s = table[n];
        }
        textToReturn+=s;
        c = "";
        c += s[0];
        table[count] = table[old] + c;
        count++;
        old = n;
    }
    return textToReturn;
}