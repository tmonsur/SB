## Part 1
1. make a directory called first
   mkdir first

2. change directory to the first folder
   cd first

3. create a file called person.txt
   touch person.txt

4. change the name of person.txt to another.txt
   mv person.txt another.txt

5. make a copy of the another.txt file and call it copy.txt
   cp another.txt copy.txt

6. remove the copy.txt file
   rm copy.txt

7. make a copy of the first folder and call it second
   cp -r first second

8. delete the second folder
   rm -rf second

## Part 2
1. What does the man command do? Type in man rm. How do you scroll and get out?
   Man command is shorthand for manual for teminal commands. It explains further about different commands and it's flags. TO scroll use "enter" or "up/down" arrow key. To exit use "q" or "ctrl+c".

2. Look at the man page for ls. What does the -l flag do? What does the -a flag do?
   -l flag gives more information of a file. 
   -a flag includes all files for a particular command 

3. How do you jump between words in the terminal?
   Option/Alt + left/right

4. How do you get to the end of a line in terminal?
   command/ctrl+e

5. How do you move your cursor to the beginning in terminal?
   command/ctrl+a

6. How do you delete a word (without pressing backspace multiple times) in terminal?
   command/ctrl+w

7. What is the difference between a terminal and shell?
   Terminal is a wrapper program that runs shell. Shell then processes commands and returns output

8. What is an absolute path?
   When we specify a path starting from the root directory /, we call that an absolute path.

9. What is an relative path?
   A relative path is a way to describe the location of a file or folder in relation to where you currently are in the file system

10. What is a flag? Give three examples of flags you have used.
    A "flag" is an extra instruction to add to a command to make the command more specific. Some examples are:
    ls -a = includes details of all files
    ls -l = give content of specific files
    ls -la = show all files and more detailed information about each one

11. What do the r and f flags do with the rm command?
    rm -r = deleted the directory
    rm -f = deletes a file
    rm -rf = deletes everything in a nonempty directory 