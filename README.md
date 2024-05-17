This test is made for checking the correctness of the search results with multiple parameters.
For this first version available for choice: category "Легковые", city (only popular), brand (only popular), carcass, transmission and color.

There are 3 steps in the test:
1. Choose the needed parameters and receive results.
2. Parse and save all car cards links in the search results.
3. Iterate through all saved links and check the parameters correctness.

Parameters are written in the car_data.json file. These parameters were estimated by using Allpairs tool for the pairwise testing.
There are configuration settings for this test, such as timeout 10 minutes for test execution with each bunch of parameters.
