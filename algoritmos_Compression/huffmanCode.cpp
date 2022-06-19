/**
 * huffmanCode.cpp
 * @authors Justin Fernández, Valerin Calderón, Daniel Rayo, Felipe Viales
 * @version 1
 */

#include "huffmanCode.h"

Node* huffmanCode::HuffmanRoot= nullptr;

/**
 * This is the constructor of the class
 */
huffmanCode::huffmanCode(string nameOfTheFile) {
    Huffman_codemap.resize(char_size);
    fileName=nameOfTheFile;
}

/**
 * This is the destructor of the class
 */
huffmanCode::~huffmanCode() {}


/**
 * This method is in charge of compress a given file
 */
void huffmanCode::compressFile() {
    setFrequencies();
    HuffmanRoot = makeHuffmanTree(1);
    inputFile.open(fileName,ios::binary);
    outputFile.open((fileName + ".huf").c_str(), ios::binary);
    outputFile << HuffmanRoot->Frequency;    //Write to file
    outputFile << ',';
    storeTree();
    outputFile << ' ';
    storeCodes(); //Store Codes in vector
    Write_compressed();   //Write to file
    inputFile.close();   //Close file stream
    outputFile.close();     //Close file stream
    //remove(fileName.c_str());
}


/**
* It uncompressed a given binary code using a given table of codes
*/
void huffmanCode::uncompressFile() {}


/**
* This methods choose the method to compress or uncompress a file according to the user wants
*/
Node* huffmanCode::makeHuffmanTree(int encodeOrDecode) {
    // Call the method to compress the file
    if(encodeOrDecode==1){
        return makeHuffmanTreeByFrequencies(frequencyOfCharacters);
    }else{ // Call the method to uncompressed the file
        return makeHuffmanTreeByCodes();
    }
}


/**
 * This method constructs the huffman Tree given a table of codes.\n
 * It's used when the uncompressed process is required.
 */
Node* huffmanCode::makeHuffmanTreeByCodes() {}


/**
 * It constructs Huffman Tree given a Priority Queue with the frequencies of each symbol.\n
 * It's used when the compressed process is required.
 */
Node* huffmanCode::makeHuffmanTreeByFrequencies(int frequency[]) {
    // Push in the vector all the elements which have a frequency higher than 0
    for(int currentCharacter=0; currentCharacter <char_size; currentCharacter++){
        if(frequency[currentCharacter] != 0){
            minheap.push_back(new Node(currentCharacter, frequency[currentCharacter]));
        }
    }
    // Build the minimun Binary Heap
    Build_Minheap(minheap,minheap.size()-1);
    while(minheap.size()!=1){
        Node* Z=new Node(-1,0,Extract_min(minheap),Extract_min(minheap));
        Z->Frequency= Z->leftChild->Frequency + Z->rightChild->Frequency;
        Insert_MinHeap(minheap,Z);
    }
    return(minheap[0]);
}


/**
 * It's in charge of setting the frequencies for each symbol that is in the document
 */
void huffmanCode::setFrequencies() {
    ifstream inputFile(fileName, ios::binary);
    char character;
    while(inputFile.get(character)){
        frequencyOfCharacters[static_cast<unsigned char>(character)]++;
    }
    inputFile.clear(); //Reset File pointers
    inputFile.seekg(0); //Reset File pointers
    inputFile.close(); //Close File
}


/**
 *
 */
void huffmanCode::storeCodes(Node* Root,int index) {
    if(Root->leftChild==NULL){
        single_code[index]='0';
        storeCodes(Root->leftChild, index + 1);
    }
    if(Root->rightChild==NULL){
        single_code[index]='1';
        storeCodes(Root->rightChild, index + 1);
    }
    if(Root->leftChild!=NULL && Root->leftChild!=NULL){
        for(int i=index;i>=0;i--){
            if(i!=index){
                Huffman_codemap[Root->character]*=10;
                Huffman_codemap[Root->character]+=single_code[i]-'0';
            }
            else Huffman_codemap[Root->character]=1;
        }
    }
}

/**
 *
 */
void huffmanCode::storeTree(Node *Root) {
    outputFile.open(fileName+".huf",ios::binary);
    if(Root->leftChild!=NULL && Root->rightChild!=NULL){
        outputFile<<'1';
        outputFile<<Root->character;
    }
    else{
        outputFile<<'0';
        storeTree(Root->leftChild);
        storeTree(Root->rightChild);
    }
    outputFile.close();
}


/**
 *
 */
void huffmanCode::Insert_MinHeap(vector<Node *> &A, Node *element) {
    A.push_back(element);
    int i=A.size()-1;
    while(i>0&& A[(i-1)/2]->Frequency > A[i]->Frequency){
        swap(A[i],A[(i-1)/2]);
        i=(i-1)/2;
    }
}
/**
 *
 */
Node *huffmanCode::Extract_min(vector<Node *> &A) {
    if(A.size()<1)
        return NULL;
    Node* minimum=A[0];
    A[0]=A.back();
    A.pop_back();
    Mindownheap(A,0,A.size()-1);
    return minimum;
}
/**
 *
 */
void huffmanCode::Mindownheap(vector<Node *> &A, int i, int length) {
    int least=i;
    if(2*i+1<=length&& A[2*i+1]->Frequency < A[i]->Frequency){
        least=2*i+1;
        if(2*i+2<=length&& A[2*i+2]->Frequency < A[2 * i + 1]->Frequency)
            least=2*i+2;
    }
    else if(2*i+2<=length&& A[2*i+2]->Frequency < A[i]->Frequency)
        least=2*i+2;
    if(least!=i){
        swap(A[i],A[least]);
        Mindownheap(A,least,length);
    }
}
/**
 *
 */
void huffmanCode::Build_Minheap(vector<Node*> &A, int length) {
    for(int i=(length-1)/2;i>=0;i--){
        Mindownheap(A,i,length);
    }
}