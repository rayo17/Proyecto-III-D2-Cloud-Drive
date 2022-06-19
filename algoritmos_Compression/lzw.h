/**
 * LZW.h
 * @authors Justin Fernández, Valerin Calderón, Daniel Rayo, Felipe Viales
 * @version 1
 */

#ifndef COMPRESSIONALGORITHMS_LZW_H
#define COMPRESSIONALGORITHMS_LZW_H

#include <string>
#include <bits/stdc++.h>

using namespace std;

class LZW {
public:
    LZW(){};
    ~LZW(){};
    string compressFile(string filePath);
    string uncompressFile(string vectorOfCodes);
private:
    string readFileLZW(string filePath);
    vector<int> LZWencoding(string s1);
    string transformCodesToString(vector<int> codes);
    vector<int> transformStringToCodes(string vectorOfCodes);
    string LZWdecode(vector<int> theCodes);
};


#endif //COMPRESSIONALGORITHMS_LZW_H
