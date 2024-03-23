export default function Profile({ src }) {
  return (
    <>
      <main className="timeline">
        <div className="heading-profile">
          <div>
            <img src={src} />
          </div>
        </div>
      </main>
      <div className="trends"></div>
    </>
  );
}
