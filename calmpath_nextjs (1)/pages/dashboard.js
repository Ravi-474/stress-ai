export default function Dashboard() {
  return (
    <main className="container">
      <h2>Hi there!</h2>
      <p>How are you feeling today?</p>
      <div className="mood-options">
        <span>😊</span><span>😐</span><span>😔</span><span>😢</span>
      </div>
      <a href="/activities" className="btn">Start Activity</a>
    </main>
  );
}