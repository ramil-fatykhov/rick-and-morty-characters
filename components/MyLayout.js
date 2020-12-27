const layout = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layout}>
      {props.children}
    </div>
  )
}
