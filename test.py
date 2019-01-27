import sys
import populartimes
import json

api_key = sys.argv[1]
lat = sys.argv[2]
lon = sys.argv[3] 

places = populartimes.get_id(api_key,"ChIJSYuuSx9awokRyrrOFTGg0GY")

# places = populartimes.get(api_key, ["bar"], (48.132986, 11.566126), (48.142199, 11.580047))

# print(places)

print(json.dumps(places))


sys.stdout.flush()