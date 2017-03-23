

def add_field(original_json, *entry_list_to_add): #TODO: make field_to_add_list more flexible
    for entry in entry_list_to_add:
        original_json[entry.key] = entry.value
    pass
