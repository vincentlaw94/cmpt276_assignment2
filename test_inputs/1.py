import csv

result = []
with open('default.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        result.append(row)

array = []
tmp = []
for i in range(len(result)):
    for j in range(len(result[0])):
        if result[i][j] == "1":
            tmp.append(True)
        else:
            tmp.append(False)
    array.append(tmp)
    tmp = []
print(array)
