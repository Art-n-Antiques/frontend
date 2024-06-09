import AppBar from '../AppBar/AppBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
      <footer>
        <h3>Here might be footer</h3>
      </footer>
    </div>
  );
};

export default Layout;
