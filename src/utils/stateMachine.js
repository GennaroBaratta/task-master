// @ts-nocheck
class StateMachine {
   
    constructor(config) {
      this.currentState = config.initial;
      this.config = config;
      this.context = config.context;
  
      return new Proxy(this, {
        get: (target, prop, receiver) => {
          const stateConfig = target.config.states[target.currentState];
          const transitionConfig = stateConfig?.on[prop];
  
          if (transitionConfig) {
            return (...params) => {
              target.handleTransition(transitionConfig, ...params);
            };
          } else if (typeof target[prop] === "function") {
            //Handle invalid action
            return (...params) => {
              console.error(
                `Invalid action: ${prop} in state: ${target.currentState}`,
              );
            };
          }
  
          return Reflect.get(target, prop, receiver);
        },
      });
    }
  
    handleTransition(transitionConfigs, ...params) {
      // Check if transitionConfigs is an array, if not make it an array
      const transitions = Array.isArray(transitionConfigs)
        ? transitionConfigs
        : [transitionConfigs];
  
      for (let transition of transitions) {
        const guardName = transition.guard;
        const guardPassed =
          !guardName ||
          (this.config.guards[guardName] &&
            this.config.guards[guardName](
              { context: this.context, event: { type: transition.target } },
              ...params,
            ));
  
        if (guardPassed) {
          const actionName = transition.action;
          if (actionName && this.config.actions[actionName]) {
            this.context = this.config.actions[actionName](
              { context: this.context },
              ...params,
            );
          }
  
          const nextState = transition.target;
          if (nextState) {
            this.currentState = nextState;
            console.log("Transitioned to " + this.currentState);
            break; // Break the loop once a valid transition is found
          }
        }
      }
    }
  }
  
  const drilldownConfig = {
    id: "(machine)",
    initial: "drilldown",
    context: { aggregatedRole: null, search: null }, // Initial context
    states: {
      drilldown: {
        on: {
          expandCompressManager: {
            target: "drilldown",
          },
          search: {
            target: "drilldown",
            action: "onSearch",
            guard: "canSearch",
          },
          filterValue: {
            target: "drilldown",
          },
          toggleAggregate: {
            target: "aggregate",
            action: "onEnteringAggregate",
          },
        },
      },
      aggregate: {
        on: {
          search: {
            target: "aggregate",
            action: "onSearch",
            guard: "canSearch",
          },
          filterValue: {
            target: "aggregate",
          },
          aggregateByRole: {
            target: "aggregate",
          },
          toggleAggregate: [
            {
              target: "drilldown",
              action: "onEnteringDrilldown",
              guard: "canExitAggregate",
            },
            {
              target: "aggregate",
              action: "onEnteringAggregate",
            },
          ],
        },
      },
    },
    actions: {
      onEnteringAggregate: ({ context }, params) => {
        console.log("Entering Aggregate State with params:", params);
        return { ...context, aggregatedRole: params };
      },
      onEnteringDrilldown: ({ context }) => {
        console.log("Entering Drilldown State");
        return { ...context, aggregatedRole: null };
      },
      onSearch: ({ context }, params) => {
        console.log("Search:", params);
        return { ...context, search: params };
      },
    },
    guards: {
      canAggregate: ({ context, event }, params) => {
        return context.aggregatedRole !== params;
      },
      canExitAggregate: ({ context, event }, params) => {
        return context.aggregatedRole === params;
      },
      canSearch: ({ context, event }, params) => {
        return true; //params == undefined -> search is empty
      },
    },
  };
  
  // const drilldownMachine = new StateMachine(drilldownConfig);
  // drilldownMachine.expandCompressManager("AAA");
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  // drilldownMachine.toggleAggregate("RM");
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  // drilldownMachine.expandCompressManager("AAA");
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  // drilldownMachine.toggleAggregate("GM");
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  
  // drilldownMachine.toggleAggregate("GM");
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  
  // drilldownMachine.search("John");
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  
  // drilldownMachine.search();
  // console.log("State after toggleAggregate:", {
  //   state: drilldownMachine.currentState,
  //   context: drilldownMachine.context,
  // });
  