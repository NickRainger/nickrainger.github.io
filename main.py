a = 2022

while a > 1900:
    print ('<option value="' + str(a) + '">' + str(a) + '</option>')
    a = a - 1
print ('<option value="' + str(a) + '">' + str(a) + '</option>')