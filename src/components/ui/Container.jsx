export default function Container({ as: Tag = 'div', className = '', children, id, ...props }) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
