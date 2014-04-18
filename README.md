# cookie-js

A cookie, also known as an HTTP cookie, web cookie, or browser cookie, is a small piece of data sent from a website and stored in a user's web browser while the user is browsing that website. This script will help to be available more easily to utilize cookies.

## Usage

Insert script block first.

```
<script src="./dist/cookie.min.js"></script>
```

### Description

Get and set the cookies associated with the current document.

```
cookieAPI.get(key)
```

* key: is A string naming the piece of cookie to set.

```
cookieAPI.set(key, values, expires)
```

* key: is A string naming the piece of cookie to set.
* value: The new cookie value.
* expires: Expire date of cookie.

Clear all cookies.

```
cookieAPI.clear()
```

## License

cookie-js is available under the terms of the MIT License.
