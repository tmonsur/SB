def extract_full_names(people):
   return [f"{person['first']} {person['last']}" for person in people]