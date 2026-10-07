import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-(--color-background) px-6 py-16 text-(--color-text)">
      <div className="max-w-lg text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-(--color-accent)">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black text-(--color-primary-dark) sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-6 text-(--color-text-muted) sm:text-base">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-(--color-primary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--color-primary-dark)"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
