// A simple shell script used to generate a new test case.

#!/bin/sh
# Check out a fresh copy of jQuery
git clone git://github.com/jquery/jquery.git $1

# Copy the dummy test case file in
cp $2.html $1/index.html

# Build a copy of the jQuery test suite
cd $1 && make