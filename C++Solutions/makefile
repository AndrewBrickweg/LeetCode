# Compiler
CXX = g++

# Compiler Flags
CXXFLAGS = -std=c++11 -Wall

# Default Target
TARGET = program

# Allow specifying a file dynamically (e.g., make FILE=myfile.cpp)
SRC = $(FILE)

# Compile the specified .cpp file if FILE is provided
all: $(TARGET)

$(TARGET): $(SRC)
	$(CXX) $(CXXFLAGS) $(SRC) -o $(TARGET)

# Run the program after compiling
run: $(TARGET)
	./$(TARGET)

# Clean up the compiled executable
clean:
	rm -f $(TARGET)

# make FILE="Filename".cpp
# make run
# make clean
