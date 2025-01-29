// import React from 'react'

function Unsupported() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto text-center gap-8">
      <h1 className="text-5xl text-primary-dark">
        Oops! This data is currently
        <span className="text-accent-dark">unavailable.</span>
      </h1>
      <p className="text-3xl text-primary-dark">
        Either this user doesn't own the game you selected, or the game is
        <span className="text-accent-dark">not yet supported.</span>
        Check back later to see if support has been added.
      </p>
    </div>
  );
}

export default Unsupported;
