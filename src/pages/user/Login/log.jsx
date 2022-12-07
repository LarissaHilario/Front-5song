const obtainInfoUser = (token) => {
    token = "Bearer " + token;
    console.log(token);
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        email: email,
      }),
    };

    fetch("http://3.143.235.62:8080/user/login", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));

    if (token != null) {
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch("http://3.143.235.62:8080/user/login/token-generated", requestOptions)
      .then((response) => response.json())
      .then((res) => setToken(res.token));

    console.log(token);

    if (token != null) {
      obtainInfoUser(token);
    }
  };
