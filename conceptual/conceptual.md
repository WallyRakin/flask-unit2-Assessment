### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
    RESTful routing refers to a set of conventions for defining HTTP endpoints in a way that is consistent with the principles of Representational State Transfer (REST).

- What is a resource?
    A resource is a specific object or piece of data that can be identified, accessed, and manipulated via a unique URL, often representing entities such as users, products, or articles in web applications.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
    When building a JSON API, routes to render a form for creating a new user are not included because the API is designed to handle data interchange, not user interfaces or views.

- What does idempotent mean? Which HTTP verbs are idempotent?
    Idempotent means that an operation can be repeated multiple times without changing the result beyond the initial application. In the context of HTTP methods, it means that making the same request multiple times produces the same outcome. The HTTP verbs GET, PUT, DELETE, HEAD, OPTIONS, and TRACE are idempotent.

- What is the difference between PUT and PATCH?
    The difference between PUT and PATCH is that PUT updates or replaces the entire resource being selected, while PATCH partially updates the resource being selected.

- What is one way encryption?
    One-way encryption is a process where data is transformed making it impossible to revert or decode back to its original form.

- What is the purpose of a `salt` when hashing a password?
    The purpose of a salt when hashing a password is to add an additional piece of random data to the password, making the hash output unique even between identical passwords.

- What is the purpose of the Bcrypt module?
    The Bcrypt module is used for securely hashing passwords, using a hashing algorithm and a way to varify hashed values.

- What is the difference between authorization and authentication?
    The difference between authorization and authentication is that authentication verifies a user's identity through a username and password, while authorization determines the authenticated user is allowed to access.
