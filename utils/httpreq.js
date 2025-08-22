const fetchData = async () => {
  const req = await fetch("data.json");
  const json = await req.json();
  return json;
};

export { fetchData };
