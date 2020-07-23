interface Links {
  _id: string, 
  text: string, 
  link: string
}

interface Props {
  link: Array<Links>
}

export { Props, Links };
