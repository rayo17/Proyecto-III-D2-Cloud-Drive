/**
 * huffmanCode.h
 * @authors Justin Fernández, Valerin Calderón, Daniel Rayo, Felipe Viales
 * @version 1
 */

#ifndef COMPRESSIONALGORITHMS_HUFFMANCODE_H
#define COMPRESSIONALGORITHMS_HUFFMANCODE_H

#include<fstream>
#include<stdlib.h>
#include<iostream>
#include<vector>

using namespace std;


/**
 * @brief Structure of Node of Huffman tree
 * 
 */
struct Node{
    unsigned char character; // This is a ASCII CODE VALUE
    int Frequency;
    Node* leftChild;
    Node* rightChild;
    Node(unsigned char character,int frequency,Node* left_child=NULL,Node* right_child=NULL){
        character=character;
        Frequency=frequency;
        leftChild=left_child;
        rightChild=right_child;
    }
};
/**
 * @brief Huffman Class for compressing and uncompressing files
 * 
 */
class huffmanCode{
    public:
        huffmanCode(string nameOfTheFile);
        ~huffmanCode();
        void compressFile();
        void uncompressFile();
    private:
        int char_size=256; //This is the maximun ASCII value in the extended form
        vector<int> Huffman_codemap; // This vector is to keep the Huffman codes
        int frequencyOfCharacters[256]; //ASCII values frequency Array
        string fileName; // Name of the file
        ifstream inputFile; // Input file to read information
        ofstream outputFile; //Output file to write in a new document
        static Node* HuffmanRoot; // Root of the huffman tree
        char single_code[16]; //array to store single code
        vector<Node*>minheap; // Creates a vector to store the minimun Binary Heap
        void storeCodes(Node* Root=HuffmanRoot,int index=0);
        void storeTree(Node* Root=HuffmanRoot);
        void Write_compressed();
        void setFrequencies();
        Node* makeHuffmanTree(int encodeOrDecode);
        Node* makeHuffmanTreeByCodes();
        Node* makeHuffmanTreeByFrequencies(int frequency[]);
        void Build_Minheap(vector<Node*> &A,int length);
        void Mindownheap(vector<Node*> &A,int i,int length);
        Node* Extract_min(vector<Node*> &A);
        void Insert_MinHeap(vector<Node*> &A,Node* element);
};

#endif //COMPRESSIONALGORITHMS_HUFFMANCODE_H
