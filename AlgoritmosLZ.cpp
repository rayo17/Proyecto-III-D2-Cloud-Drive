#include <iostream>
#include <string>
#include <vector>
#include <sstream>


using namespace std;

struct Node{
	int index;
	string data;
	Node *next;
};

void st_Node(Node *head, int index, string data){
	head->index = index;
	head->data = data;
	head->next = NULL;
}

void insert_Node(Node *head, int index, string data){
	Node *new_Node = new Node;
	new_Node->index = index;
	new_Node->data = data;
	new_Node->next = NULL;


	Node *curr = head;
	while (curr != NULL)
	{
		if (curr->next == NULL)
		{
			curr->next = new_Node;
			return;
		}
		curr = curr->next;
	}
}

Node *search_Node(Node *head, string data)
{
	Node *curr = head;
	while (curr != NULL)
	{
		if (data.compare(curr->data) == 0)
			return curr;
		else
			curr = curr->next;
	}
	return NULL;
}

Node *search_Node(Node *head, int index)
{
	Node *curr = head;
	while (curr != NULL)
	{
		if (index == curr->index)
			return curr;
		else
			curr = curr->next;
	}
	return NULL;
}

bool delete_Node(Node *head, Node *to_delete){
	if (to_delete == NULL)
		return false;
	else if (to_delete == head)
	{
		head = to_delete->next;
		delete to_delete;
		return true;
	}
	else{
		Node *curr = head;
		while (curr)
		{
			if (curr->next == to_delete)
			{
				curr->next = to_delete->next;
				delete to_delete;
				return true;
			}
			curr = curr->next;
		}
		return false;
	}
}

vector <string> split(string str, char delimiter) {
	vector<string> internal;
	stringstream ss(str); // Turn the string into a stream.
	string tok;

	while (getline(ss, tok, delimiter)) {
		internal.push_back(tok);
	}

	return internal;
}













// Se crea algoritmo LZ-77
string LZ77(string input, int option)
{
	// Se inician las variables
	string result;
	int length, char_info_selc = 0;

	if (option == 1)
	{
	check_char:		//Verifica el largo del dato
		length = (int)input.length();	// Calcula el tamaño de la cadena de entrada
		
    //Verifica que sea el numero de entrada se menor que 3 
		if (length <= 2)
		{
			cout << "enter at leaset 3 characters \n";
			getline(cin, input);		// Lee la cadena de entrada
			goto check_char;
		}

		// Se declara un arry para el resultado final 'result_ary'
		int** result_ary = new int*[3];
		for (int i = 0; i < length; ++i)
			result_ary[i] = new int[length];
		
    //Evita numeros menores a 0 
		for (int i = 0; i < 3; i++)
		{
			for (int j = 0; j < length; j++)
				result_ary[i][j] = 0;
		}

		// Declara un array para almacenar cada información de char en la cadena de entrada 'char_info'
		int** char_info = new int*[3];
		for (int i = 0; i < length; ++i)
			char_info[i] = new int[length];
      
		// Evita numeros menores que 0 en el char
		for (int i = 0; i < 3; i++)
		{
			for (int j = 0; j < length; j++)
				char_info[i][j] = 0;
		}

	
		result_ary[0][0] = 0;
		result_ary[1][0] = 0;
		result_ary[2][0] = input[0];

		// Contador de resultados
		int result_count = 1;

		
		for (int i = 1; i < length; i++)
		{
		
    // Un bucle para verificar el carácter de entrada en la posición i es igual a cualquiera de
    // carácter anterior en la entrada y guarda esta información en la matriz char_info
			for (int j = 0; j < i; j++)
			{
				// Comprueba la posición de la vista anterior del elemento i
				if (input[i] == input[j])
				{
				
					char_info[0][char_info_selc] = i - j;

					// aumentar el selector de matriz de información
					char_info_selc++;
				}

			}

			// Verifica el tamaño de cada posición de carácter
			for (int j = 0; j < length; j++)
			{
				
				if (char_info[0][j] != 0)
				{
					
					int start = i - char_info[0][j];

					// Set count to calculate length for this char position
					int count = 1;

					// A loop to check length for this char position
					for (int k = 0; k < length; k++)
					{
						// Check next element of start by next element of input
						if (input[start + count] == input[i + count])
							count++;	// Increase count by 1
						else
						{
							char_info[1][j] = count;	// Store count value in length 

							// Check if this input char is the last char
							if (i != (length - 1))
							{
								// Store next char to char info
								// Check this postion is equal to length
								if (char_info[0][j] + count == length)
									char_info[2][j] = 0;	// Set 0 in next char field
								else
									char_info[2][j] = input[char_info[0][j] + count];	// Set the next char
							}
							else
								char_info[2][j] = NULL;		// Set NULL in next char field

							break;	// Stop loop
						}
					}
				}
			}

			// Set large selector
			int large = 0;	// large selector equal 0

			// Loop to check the largest length for every char info
			for (int k = 1; k < length; k++)
			{
				// Check largest
				if (char_info[1][large] == char_info[1][k])
					large = k;	// Set largest
				else if (char_info[1][large] < char_info[1][k])
					large = k;	// Set largest
			}

			// Check largest length is equal to 0
			if (char_info[1][large] == 0)
				char_info[2][large] = input[i];		// Set char info
			else
			{
				i += char_info[1][large];		// increase loop counter by length of the largest char info element
				char_info[2][large] = input[i];		// Set char info
			}

			// Set final result info
			result_ary[0][result_count] = char_info[0][large];
			result_ary[1][result_count] = char_info[1][large];
			result_ary[2][result_count] = char_info[2][large];

			// Increase result counter
			result_count++;

			// Prepare char info array for next char by set it to 0
			for (int z = 0; z < 2; z++)
			{
				for (int j = 0; j < length; j++)
					char_info[z][j] = 0;	// Set every element in char info to 0
			}

			// Prepare char info selector for next char by set it to 0
			char_info_selc = 0;
		}

		// Display final results
		for (int j = 0; j < length; j++)
		{
			if (result_ary[0][j] == 0 && result_ary[1][j] == 0)
			{
				if (result_ary[2][j] != NULL || result_ary[2][j] != 0)
				{
					char z = result_ary[2][j];
					result += to_string(result_ary[0][j]) + "," + to_string(result_ary[1][j]) + "," + z + " ";
				}
			}
			else
			{
				//char z = result_ary[2][j];
				result += to_string(result_ary[0][j]) + "," + to_string(result_ary[1][j]) + ",0 ";
			}
		}

		// Clean up memory
		//for (int i = 0; i < 3; ++i) {
		//	{
		//		delete[] result_ary[i];	delete[] char_info[i];
		//	}
		//}
		//delete[] result_ary;
		//delete[] char_info;

		return result;
	}
	else if (option == 2)
	{
		vector<string> s_input = split(input, ' ');

		for (int i = 0; i < s_input.size(); ++i)
		{
			vector<string> ss_input = split(s_input[i], ',');

			int p = stoi(ss_input[0]),
				l = stoi(ss_input[1]);
			string ch;
			if (ss_input[2][0] == '0')
				ch = ' ';
			else
				ch = ss_input[2];

			if (p != 0)
			{
				int result_len = (int)result.length();
				for (int x = 0; x < l; x++)
					result += result[result_len - p + x];
			}

			if (ch[0] != '0' || ch[0] != NULL)
				result += ch;
		}
		return result;
	}
}
