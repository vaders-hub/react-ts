import { Store, Unsubscribe, createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function toObservable(store: any) {
  return {
    subscribe({ onNext }: any) {
      const dispose: any = store.subscribe(() => onNext(store.getState()));
      onNext(store.getState());
      return { dispose };
    },
  };
}

export function observeStore<T>(
  store: Store<any>,
  select: (state: any) => T,
  onChange: (selected: T) => void
): Unsubscribe {
  let currentState: T | undefined;

  function handleChange() {
    const nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

sagaMiddleware.run(rootSaga);
