export default function validated(password: string): boolean {
  const regex = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{6,}$/;

  return regex.test(password);
}

// Test

const password = "jzsff9Zsdfsdfsdf44";
console.log(validated(password));
