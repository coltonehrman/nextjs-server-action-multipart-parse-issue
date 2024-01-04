async function submit(formData: FormData) {
  'use server';

  console.log(formData);

  return {};
}

export default function ServerAction() {
  return (
    <div>
      <h2>Server Action</h2>

      <form action={submit}>
        <input name="text" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
