// import React from 'react'

function Bosses() {
  return (
    // {{#if @bosses}}
    <div
      data-test-bosses
      className="flex flex-col bg-header-dark rounded-md drop-shadow-md px-4 py-2 gap-2 mx-3 md:mx-0"
    >
      {/* {{#if @bosses.next_boss}} */}
      <h1 className="text-4xl text-primary-dark">Bosses</h1>
      <div className="flex flex-col mb-8 gap-2">
        <p
          data-test-next-boss
          className="text-2xl md:text-3xl text-secondary-dark"
        >
          Next Boss:
          <span className="text-2xl md:text-3xl text-accent-dark">
            @bosses.next_boss
          </span>
        </p>
        <p
          data-test-recent-boss
          className="text-2xl md:text-3xl text-secondary-dark"
        >
          Recent Boss:
          <span className="text-2xl md:text-3xl text-accent-dark">
            @bosses.recent_boss
          </span>
        </p>
        <span>
          <button
            type="button"
            // {{on "click" this.toggleShowPrevBosses}}
            className="text-2xl md:text-3xl text-secondary-dark"
          >
            Previous bosses
          </button>
        </span>
        <div className="{{if this.hidden 'hidden'}}">
          {/* {{#each @bosses.prev_bosses as |prev|}} */}
          <p className="text-2xl md:text-3xl text-accent-dark">prev</p>
          {/* {{/each}} */}
        </div>
      </div>
      {/* {{else}} */}
      <h1 className="text-4xl text-primary-dark">Bosses (complete)</h1>
      <div className="flex flex-col mb-8 gap-2">
        <p
          data-test-recent-boss
          className="text-2xl md:text-3xl text-secondary-dark"
        >
          Recent Boss:
          <span className="text-2xl md:text-3xl text-accent-dark">
            @bosses.recent_boss
          </span>
        </p>
        <span>
          <button
            type="button"
            // {{on "click" this.toggleShowPrevBosses}}
            className="text-2xl md:text-3xl text-secondary-dark"
          >
            Previous bosses
          </button>
        </span>
        <div className="{{if this.hidden 'hidden'}}">
          {/* {{#each @bosses.prev_bosses as |prev|}} */}
          <p className="text-2xl md:text-3xl text-accent-dark">prev</p>
          {/* {{/each}} */}
        </div>
      </div>
      {/* {{/if}} */}
    </div>
    // {{/if}}
  );
}

export default Bosses;
