const baseUrlFirestore = 'https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/'

export const getUrl  = path => {
  return `${baseUrlFirestore}${encodeURIComponent(path)}?alt=media`
}