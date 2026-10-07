import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App error boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-(--color-background) px-6 text-center text-(--color-text)">
          <div className="max-w-md rounded-2xl border border-(--color-border) bg-(--color-surface) p-8 shadow-(--shadow-soft)">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-(--color-accent)">
              Something went wrong
            </p>
            <h1 className="text-3xl font-black text-(--color-primary-dark)">
              Oops!
            </h1>
            <p className="mt-4 text-sm leading-6 text-(--color-text-muted)">
              We hit an unexpected issue while loading this page. Please refresh and try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-(--color-primary) px-5 py-3 text-sm font-semibold text-white transition hover:bg-(--color-primary-dark)"
            >
              Refresh page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
