// pages/index.js

import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert('Search feature will be implemented!');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Landing Page</title>
        <meta name='description' content='A simple landing page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type='text'
            placeholder='Search...'
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit' className={styles.searchButton}>Search</button>
        </form>
      </main>

      <footer className={styles.footer}>
        © 2025 Simple Landing Page
      </footer>
    </div>
  );
}
