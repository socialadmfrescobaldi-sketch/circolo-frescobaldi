export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const CorsiPartsFragmentDoc = gql`
    fragment CorsiParts on Corsi {
  __typename
  titolo
  intro
  elenco {
    __typename
    nome
  }
}
    `;
export const ContattiPartsFragmentDoc = gql`
    fragment ContattiParts on Contatti {
  __typename
  indirizzo
  telefono
  email
  piva
  facebook
  instagram
  tiktok
  whatsapp
}
    `;
export const DocentiPartsFragmentDoc = gql`
    fragment DocentiParts on Docenti {
  __typename
  elenco {
    __typename
    nome
    ruolo
    cv
  }
}
    `;
export const PresidenzaPartsFragmentDoc = gql`
    fragment PresidenzaParts on Presidenza {
  __typename
  nome
  ruolo
  bio
}
    `;
export const MissionPartsFragmentDoc = gql`
    fragment MissionParts on Mission {
  __typename
  citazione
  testo
}
    `;
export const SociPartsFragmentDoc = gql`
    fragment SociParts on Soci {
  __typename
  testo
  tesseraTitolo
  tesseraPrezzo
  tesseraTesto
}
    `;
export const DocumentiPartsFragmentDoc = gql`
    fragment DocumentiParts on Documenti {
  __typename
  statuto
  regolamento
  modulo
}
    `;
export const ChiSiamoPartsFragmentDoc = gql`
    fragment ChiSiamoParts on ChiSiamo {
  __typename
  titolo
  stats {
    __typename
    numero
    etichetta
  }
  testo
}
    `;
export const EventiPartsFragmentDoc = gql`
    fragment EventiParts on Eventi {
  __typename
  elenco {
    __typename
    titolo
    testo
  }
}
    `;
export const PremioPartsFragmentDoc = gql`
    fragment PremioParts on Premio {
  __typename
  testo
  alboOro {
    __typename
    nome
  }
}
    `;
export const TestiVariPartsFragmentDoc = gql`
    fragment TestiVariParts on TestiVari {
  __typename
  candidatureTitolo
  candidatureTesto
  trasparenzaTesto
  footerDescrizione
}
    `;
export const GalleriaPartsFragmentDoc = gql`
    fragment GalleriaParts on Galleria {
  __typename
  immagini {
    __typename
    url
    alt
  }
}
    `;
export const HeaderPartsFragmentDoc = gql`
    fragment HeaderParts on Header {
  __typename
  logoMain
  logoSub
  heroEyebrow
  heroTitolo
  heroSottotitolo
  heroDescrizione
}
    `;
export const IniziativePartsFragmentDoc = gql`
    fragment IniziativeParts on Iniziative {
  __typename
  elenco {
    __typename
    testo
    foto
  }
}
    `;
export const CorsiDocument = gql`
    query corsi($relativePath: String!) {
  corsi(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CorsiParts
  }
}
    ${CorsiPartsFragmentDoc}`;
export const CorsiConnectionDocument = gql`
    query corsiConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CorsiFilter) {
  corsiConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CorsiParts
      }
    }
  }
}
    ${CorsiPartsFragmentDoc}`;
export const ContattiDocument = gql`
    query contatti($relativePath: String!) {
  contatti(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContattiParts
  }
}
    ${ContattiPartsFragmentDoc}`;
export const ContattiConnectionDocument = gql`
    query contattiConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContattiFilter) {
  contattiConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContattiParts
      }
    }
  }
}
    ${ContattiPartsFragmentDoc}`;
export const DocentiDocument = gql`
    query docenti($relativePath: String!) {
  docenti(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocentiParts
  }
}
    ${DocentiPartsFragmentDoc}`;
export const DocentiConnectionDocument = gql`
    query docentiConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocentiFilter) {
  docentiConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocentiParts
      }
    }
  }
}
    ${DocentiPartsFragmentDoc}`;
export const PresidenzaDocument = gql`
    query presidenza($relativePath: String!) {
  presidenza(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PresidenzaParts
  }
}
    ${PresidenzaPartsFragmentDoc}`;
export const PresidenzaConnectionDocument = gql`
    query presidenzaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PresidenzaFilter) {
  presidenzaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PresidenzaParts
      }
    }
  }
}
    ${PresidenzaPartsFragmentDoc}`;
export const MissionDocument = gql`
    query mission($relativePath: String!) {
  mission(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MissionParts
  }
}
    ${MissionPartsFragmentDoc}`;
export const MissionConnectionDocument = gql`
    query missionConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MissionFilter) {
  missionConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MissionParts
      }
    }
  }
}
    ${MissionPartsFragmentDoc}`;
export const SociDocument = gql`
    query soci($relativePath: String!) {
  soci(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SociParts
  }
}
    ${SociPartsFragmentDoc}`;
export const SociConnectionDocument = gql`
    query sociConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SociFilter) {
  sociConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SociParts
      }
    }
  }
}
    ${SociPartsFragmentDoc}`;
export const DocumentiDocument = gql`
    query documenti($relativePath: String!) {
  documenti(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocumentiParts
  }
}
    ${DocumentiPartsFragmentDoc}`;
export const DocumentiConnectionDocument = gql`
    query documentiConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocumentiFilter) {
  documentiConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocumentiParts
      }
    }
  }
}
    ${DocumentiPartsFragmentDoc}`;
export const ChiSiamoDocument = gql`
    query chiSiamo($relativePath: String!) {
  chiSiamo(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ChiSiamoParts
  }
}
    ${ChiSiamoPartsFragmentDoc}`;
export const ChiSiamoConnectionDocument = gql`
    query chiSiamoConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ChiSiamoFilter) {
  chiSiamoConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ChiSiamoParts
      }
    }
  }
}
    ${ChiSiamoPartsFragmentDoc}`;
export const EventiDocument = gql`
    query eventi($relativePath: String!) {
  eventi(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EventiParts
  }
}
    ${EventiPartsFragmentDoc}`;
export const EventiConnectionDocument = gql`
    query eventiConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EventiFilter) {
  eventiConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EventiParts
      }
    }
  }
}
    ${EventiPartsFragmentDoc}`;
export const PremioDocument = gql`
    query premio($relativePath: String!) {
  premio(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PremioParts
  }
}
    ${PremioPartsFragmentDoc}`;
export const PremioConnectionDocument = gql`
    query premioConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PremioFilter) {
  premioConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PremioParts
      }
    }
  }
}
    ${PremioPartsFragmentDoc}`;
export const TestiVariDocument = gql`
    query testiVari($relativePath: String!) {
  testiVari(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TestiVariParts
  }
}
    ${TestiVariPartsFragmentDoc}`;
export const TestiVariConnectionDocument = gql`
    query testiVariConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TestiVariFilter) {
  testiVariConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TestiVariParts
      }
    }
  }
}
    ${TestiVariPartsFragmentDoc}`;
export const GalleriaDocument = gql`
    query galleria($relativePath: String!) {
  galleria(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GalleriaParts
  }
}
    ${GalleriaPartsFragmentDoc}`;
export const GalleriaConnectionDocument = gql`
    query galleriaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GalleriaFilter) {
  galleriaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GalleriaParts
      }
    }
  }
}
    ${GalleriaPartsFragmentDoc}`;
export const HeaderDocument = gql`
    query header($relativePath: String!) {
  header(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HeaderParts
  }
}
    ${HeaderPartsFragmentDoc}`;
export const HeaderConnectionDocument = gql`
    query headerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HeaderFilter) {
  headerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HeaderParts
      }
    }
  }
}
    ${HeaderPartsFragmentDoc}`;
export const IniziativeDocument = gql`
    query iniziative($relativePath: String!) {
  iniziative(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...IniziativeParts
  }
}
    ${IniziativePartsFragmentDoc}`;
export const IniziativeConnectionDocument = gql`
    query iniziativeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: IniziativeFilter) {
  iniziativeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...IniziativeParts
      }
    }
  }
}
    ${IniziativePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    corsi(variables, options) {
      return requester(CorsiDocument, variables, options);
    },
    corsiConnection(variables, options) {
      return requester(CorsiConnectionDocument, variables, options);
    },
    contatti(variables, options) {
      return requester(ContattiDocument, variables, options);
    },
    contattiConnection(variables, options) {
      return requester(ContattiConnectionDocument, variables, options);
    },
    docenti(variables, options) {
      return requester(DocentiDocument, variables, options);
    },
    docentiConnection(variables, options) {
      return requester(DocentiConnectionDocument, variables, options);
    },
    presidenza(variables, options) {
      return requester(PresidenzaDocument, variables, options);
    },
    presidenzaConnection(variables, options) {
      return requester(PresidenzaConnectionDocument, variables, options);
    },
    mission(variables, options) {
      return requester(MissionDocument, variables, options);
    },
    missionConnection(variables, options) {
      return requester(MissionConnectionDocument, variables, options);
    },
    soci(variables, options) {
      return requester(SociDocument, variables, options);
    },
    sociConnection(variables, options) {
      return requester(SociConnectionDocument, variables, options);
    },
    documenti(variables, options) {
      return requester(DocumentiDocument, variables, options);
    },
    documentiConnection(variables, options) {
      return requester(DocumentiConnectionDocument, variables, options);
    },
    chiSiamo(variables, options) {
      return requester(ChiSiamoDocument, variables, options);
    },
    chiSiamoConnection(variables, options) {
      return requester(ChiSiamoConnectionDocument, variables, options);
    },
    eventi(variables, options) {
      return requester(EventiDocument, variables, options);
    },
    eventiConnection(variables, options) {
      return requester(EventiConnectionDocument, variables, options);
    },
    premio(variables, options) {
      return requester(PremioDocument, variables, options);
    },
    premioConnection(variables, options) {
      return requester(PremioConnectionDocument, variables, options);
    },
    testiVari(variables, options) {
      return requester(TestiVariDocument, variables, options);
    },
    testiVariConnection(variables, options) {
      return requester(TestiVariConnectionDocument, variables, options);
    },
    galleria(variables, options) {
      return requester(GalleriaDocument, variables, options);
    },
    galleriaConnection(variables, options) {
      return requester(GalleriaConnectionDocument, variables, options);
    },
    header(variables, options) {
      return requester(HeaderDocument, variables, options);
    },
    headerConnection(variables, options) {
      return requester(HeaderConnectionDocument, variables, options);
    },
    iniziative(variables, options) {
      return requester(IniziativeDocument, variables, options);
    },
    iniziativeConnection(variables, options) {
      return requester(IniziativeConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
