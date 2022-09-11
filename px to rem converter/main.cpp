#include <iostream>
#include <iomanip>
using namespace std;
int main(){
    //To run this code you need a c++ compiler, installed on your desktop or part of a vscode extension or 
    //you can download devC++ or codeblocks IDE which comes with an inbuilt c++ compiler to save you stress.

    /* well i built this pixels to rem converter to enable me work on responsiveness in
    the landing page faster as i would need to convert from the pixels to rems which i would use in my css file
    since all the dimensions in the figma design for this landing page were given in pixels.
    so why do this manually when i can create a mini calculator for it and use my terminal*/
    double pixel;
    double rem;
    int unit = 16;
    cout << "Hello Programmer, let's get you started";
    cout << "\n\n";
    cout << "Please input the number of pixels you want to convert to rem\n";
    cin >> pixel;
    rem = pixel / unit;
    cout << fixed << setprecision(2) << rem << " rems\n";
    return 0;
}