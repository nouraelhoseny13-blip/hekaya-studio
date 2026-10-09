import "./Logo.css";

type LogoProps = {
light?: boolean;
};

function Logo({ light = false }: LogoProps) {
return (
<a
href="#home"
className={`hekaya-logo ${light ? "hekaya-logo-light" : ""}`}
aria-label="Hekaya Studio home"
> <span className="hekaya-logo-symbol">h.</span> <span className="hekaya-logo-wordmark"> <span className="hekaya-logo-name">HEKAYA</span> <span className="hekaya-logo-studio">S T U D I O</span> </span> </a>
);
}

export default Logo;
