import { useRouter } from 'next/router';

export default function Onboarding() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <main className="container">
      <h2>How old are you?</h2>
      <form onSubmit={handleSubmit}>
        <select name="age" required>
          <option value="">Select Age Range</option>
          <option value="young">13-25</option>
          <option value="adult">26+</option>
        </select>
        <button type="submit" className="btn">Continue</button>
      </form>
    </main>
  );
}