export const Button = ({ children, varient, link, href }) => {
	return link ? (
		<a href={href} className={`button btn-${varient} btn-rounded`}>
			{children}
		</a>
	) : (
		<button className={`button btn-${varient} btn-rounded`}>{children}</button>
	);
};

export default {};
