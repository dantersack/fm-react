import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [count, setCount] = useState<number>(0);
  const [quote, setQuote] = useState<Quote | undefined>();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetchRandomQuote().then(setQuote);
  }, []);

  if (!quote) return <Loading />;
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <InspirationalQuote content={quote.content} source={quote.source} />
      <Quotes
        count={count}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCount(e.target.valueAsNumber)
        }
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          fetchQuotes(count).then((quotes) => setQuotes(quotes));
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote: Quote) => (
            <InspirationalQuote
              key={quote.id}
              content={quote.content}
              source={quote.source}
            />
          ))}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
