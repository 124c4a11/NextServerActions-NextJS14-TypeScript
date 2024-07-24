export async function getFetchData<Data>(promise: Promise<Response>) {
  let data: Data | null = null;

  try {
    data = await (await promise).json();
  } catch (error) {
    console.error(error);
  }

  return data;
}
