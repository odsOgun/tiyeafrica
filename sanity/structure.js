// Custom Studio sidebar: posts, taxonomy, and a split view for comment moderation.
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Authors')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      S.listItem()
        .title('Comments')
        .child(
          S.list()
            .title('Comments')
            .items([
              S.listItem()
                .title('Pending approval')
                .child(
                  S.documentList()
                    .title('Pending approval')
                    .filter('_type == "comment" && approved != true')
                    .apiVersion('2024-10-01')
                ),
              S.listItem()
                .title('Approved')
                .child(
                  S.documentList()
                    .title('Approved')
                    .filter('_type == "comment" && approved == true')
                    .apiVersion('2024-10-01')
                ),
            ])
        ),
    ]);
