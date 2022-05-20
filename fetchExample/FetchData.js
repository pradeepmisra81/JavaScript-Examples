const fetchData = async () => {
    console.log('Test fetch');
    const response = await fetch('https://randomuser.me/api');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      //const result = await data.result;
      console.log(data.results[0]);
}

fetchData();