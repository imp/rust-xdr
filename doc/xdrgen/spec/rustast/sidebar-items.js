initSidebarItems({"constant":[["DUMMY_SP",""]],"enum":[["TokenTree","When the main rust parser encounters a syntax-extension invocation, it parses the arguments to the invocation as a token-tree. This is a very loose structure, such that all sorts of different AST-fragments can be passed to syntax extensions using a uniform type.If the syntax extension is an MBE macro, it will attempt to match its LHS token tree against the provided token tree, and if it finds a match, will transcribe the RHS token tree, splicing in any captured macro_parser::matched_nonterminals into the `SubstNt`s it finds.The RHS of an MBE macro is the only place `SubstNt`s are substituted. Nothing special happens to misnamed or misplaced `SubstNt`s."]],"fn":[["expr_to_string",""],["item_to_string",""],["str_to_ident","Maps a string to an identifier with an empty syntax context."],["token_to_string",""]],"mod":[["ast",""],["syntax",""]],"struct":[["Expr","An expression"],["ExtCtxt","One of these is made during expansion and incrementally updated as we go; when a macro expansion occurs, the resulting nodes have the backtrace() -> expn_info of their expansion context stored into their span."],["Ident","An identifier contains a Name (index into the interner table) and a SyntaxContext to track renaming and macro expansion per Flatt et al., \"Macros That Work Together\""],["Item","An itemThe name might be a dummy name in case of anonymous items"],["Mod",""],["P","An owned smart pointer."]],"trait":[["AstBuilder",""]]});