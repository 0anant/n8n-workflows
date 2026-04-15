//Example 1 Access API response;

[ {"json" : {
    "name": "Praveen",
    "email": "praveen@gmail.com"
}}]

{{ $json[name] }}

//It is not working because this syntax 
// {{ $json.name }} or  {{ $json.email }} will only work for n8n nodes