# leveraging a declerative approach 
- pass a new updated config file to kubectl
  - each config file has a 
    - name
    - type/kind
    - image
- master inspects the name and kind properties of config file
  - if master finds an object with an identical name and type/kind
    - it will not create a new object and instead update existing objects with new configuration