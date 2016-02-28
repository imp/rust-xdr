initSidebarItems({"enum":[["Error","XDR errorsThis simply amalgamates the various errors which can arise."]],"fn":[["pack","Serialization (packing) helper.Helper to serialize any type implementing `Pack` into an implementation of `std::io::Write`."],["pack_array","Pack a fixed-size array.As the size is fixed, it doesn't need to be encoded."],["unpack","Deserialization (unpacking) helper functionThis function will read encoded bytes from `input` (a `Read` implementation) and return a fully constructed type (or an error). This relies on type inference to determine which type is to be unpacked, so its up to the calling envionment to clarify this. (Generally it falls out quite naturally.)"],["unpack_flex_array","Unpack a length-limited array"],["unpack_string","Unpack length-limited string"]],"mod":[["record","XDR record markingThis module implements wrappers for `Write` and `BufRead` which implement \"Record Marking\" from RFC1831, used for encoding XDR structures onto a bytestream such as TCP.The format is simple - each record is broken up into one or more record fragments. Each record fragment is prefixed with a 32-bit big-endian value. The low 31 bits is the fragment size, and the top bit is the \"end of record\" marker, indicating the last fragment of the record.There's no magic number or other way to determine whether a stream is using record marking; both ends must agree."]],"trait":[["Pack","Basic packing trait.This trait is used to implement XDR packing any Rust type into a `Write` stream. It returns the number of bytes the encoding took.This crate provides a number of implementations for all the basic XDR types, and generated code will generally compose them to pack structures, unions, etc.Streams generated by `Pack` can be consumed by `Unpack`."],["Read","The `Read` trait allows for reading bytes from a source.Implementors of the `Read` trait are sometimes called 'readers'.Readers are defined by one required method, `read()`. Each call to `read` will attempt to pull bytes from this source into a provided buffer. A number of other methods are implemented in terms of `read()`, giving implementors a number of ways to read bytes while only needing to implement a single method.Readers are intended to be composable with one another. Many implementors throughout `std::io` take and provide types which implement the `Read` trait.Please note that each call to `read` may involve a system call, and therefore, using something that implements `BufRead`, such as `BufReader`, will be more efficient.Examples`File`s implement `Read`:"],["Unpack","Basic unpacking traitThis trait is used to unpack a type from an XDR encoded byte stream (encoded with `Pack`).  It returns the decoded instance and the number of bytes consumed from the input.This crate provides implementations for all the basic XDR types, as well as for arrays."],["Write","A trait for objects which are byte-oriented sinks.Implementors of the `Write` trait are sometimes called 'writers'.Writers are defined by two required methods, `write()` and `flush()`:The `write()` method will attempt to write some data into the object, returning how many bytes were successfully written.The `flush()` method is useful for adaptors and explicit buffers themselves for ensuring that all buffered data has been pushed out to the 'true sink'.Writers are intended to be composable with one another. Many implementors throughout `std::io` take and provide types which implement the `Write` trait.Examples"]],"type":[["Result","A wrapper around `std::result::Result` where errors are all `xdr_codec::Error`."]]});