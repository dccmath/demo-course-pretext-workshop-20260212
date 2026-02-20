var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chap-intro-2",
  "level": "1",
  "url": "chap-intro-2.html",
  "type": "Section",
  "number": "",
  "title": "Introduction",
  "body": " Introduction   Welcome to Error-Correction and Information! Each class will correspond to a chapter in this book. Before class, I will post the “Daily prep” section. Read it carefully, complete the best answers you can for the Questions, and bring your work to class. Start about 24 hours before class – that gives the right balance between being able to remember new ideas, and having enough time to let them “settle in” before class.   Questions. Each daily prep will have some questions for you to answer. Your goal is to make as much progress on these as possible. Take time to think through them and do your best, but it is OK to be wrong. You are always welcome to collaborate with others in this class on the questions. Please give clear credit for ideas by writing your collaborators’ names on the page.  After class, I will post a complete set of class notes with more formal definitions, based on what we did in class. Part of your assignment for subsequent classes will be to read the class notes from the previous class.    Your first daily prep  This class is about information. For our purposes, “information” means any idea that can be communicated to another person in some concrete form. For example, an email contains written information, as does a text message. A Word document, a PDF, or a spreadsheet are also information. We aren’t limited to writing: Photos are information, as are audio recordings. There are many other kinds of information – take a moment to try to come up with some.  Because information involves another person, you must transmit that information in some way: Mailing a letter, carving into a stone tablet, or – most likely – using a computer. Computers include tablets, phones, GPS devices, and anything electronic that has the ability to send a signal.Each individual piece of information that we transmit is called a message.  A key feature of a computer is that it can only work with and transmit numbers. So, every message we transmit must be somehow written using numbers.   For example, take this simple rule for turning capital letters and the space character into numbers:   A = 0 B = 1 C = 2 ... Y = 24 Z = 25 space = 26    This is an example of a code, which is simply a rule that specifies how to write a message using numbers. In everyday language, “code” often implies secrecy and spies, but that’s not the case here. Think of a code as an attempt to make a message more understandable to a computer. Codes that involve secrecy are usually called “ciphers” or “cryptosystems”. We won’t study those in this class.    The message “HI” is encoded as “7, 8”. If someone sends you “7, 8, 26, 24, 14, 20”, you can decode it to get the message “HI YOU”. Notice how we had to use the 26 to write a space between words – only numbers can be transmitted, so if we don’t encode the space as a number, we end up with “HIYOU”, which is somewhat less than ideal.      Decode “12,0,19,7,26,8,18,26,5,20,13”. Then encode a short word or phrase of your choosing ( don’t write down its “plain” or unencoded form on the sheet you bring to class).      Our first code only deals with capital letters and spaces. What else might you want to include in this code, in order to be able to send useful text messages? Design and write down a rule that includes everything you think you will need for a written message. Encode a message that makes use of your additional symbols.    Here’s another example of a code. The code in Figure is called “Unicode Transformation Format 8-bit”, or just “UTF-8”. This code is used by the vast majority of everything on the Internet (including web pages, emails, text messages, so on). In UTF-8, each letter is represented by 8 bits (a 1 or a 0). Each of these 8 bit encoded messages is called a codeword.           A  01000001  J  01001010  S  01010011    B  01000010  K  01001011  T  01010100    C  01000011  L  01001100  U  01010101    D  01000100  M  01001101  V  01010110    E  01000101  N  01001110  W  01010111    F  01000110  O  01001111  X  01011000    G  01000111  P  01010000  Y  01011001    H  01001000  Q  01010001  Z  01011010    I  01001001  R  01010010  (space)  00100000    The UTF-8 code, showing only capital letters and space Be careful: In Figure , we’ve only shown part of UTF-8 – there are many other symbols that would make this code listing too large to fit on this page. For example, 01100001 represents the lowercase letter “a”, and 00100001 represents an exclamation point “!”. UTF-8 includes codewords for all English letters, digits, and many punctuation marks.  Up until now, we have been lying a bit. In our first code, we put commas between numbers. But a computer can only use numbers to communicate. Commas, spaces, and other ways of dividing numbers into groups are right out. So, we must smash together all of the codewords we want to transmit.    Suppose you receive this message which is encoded with UTF-8: 0101001101001101010010010100110001000101 Show how to decode it into a common English word.      Encode a short word or phrase of your choosing with UTF-8.    In this class, we will almost always work with binary codes, that is, codes that use only 0’s and 1’s. Furthermore, our codes will (for now) always be block codes, in which each codeword has the same number of bits (8, for UTF-8). “Our first code” (Figure ) is not a block code, because some codewords use 1 digit, and others use 2 digits. The next question shows why block codes are important.    Suppose we are using “our first code” (Figure ). You receive this encoded message with all codewords smashed together: 0117020301170 Find at least two different decodings of this. That is, find two different messages that would both encode to this same number. Why is this a problem? Why can’t this happen with UTF-8?    So far, we’ve only focused on information. What about the “error-correction” part of the class’s name? Computer transmissions almost always involve errors, which happen when one bit is “flipped” from a 0 to 1 or vice versa. This can be caused by static, faulty wiring, lightning, cosmic rays, inconveniently placed birds, or anything else that interferes with the transmission.    Suppose you receive this message in UTF-8: 01011110 . You can’t decode it – why not? In this message, there has been an error: One of the bits was flipped from 0 to 1 or vice versa. With this information, what might the original message have been? List as many possibilities as you can find using Figure . For each possibility, indicate where the error happened, and what the correct decoding would be.    In this last question, you should be able to find several different “correct” decodings, depending on where the error occurred. How can you choose which of these is the right one? Much of this class will be focused on answering this question.    Class notes   Basic definitions    Let be a set of symbols called messages or source words, and be a set of symbols called codewords. A code is a bijective function .    We say that message is encoded to . Because is bijective, it has an inverse. Thus if we receive the codeword , we can decode it to get the source word .  However, we will often focus only on the codewords in a code, for reasons which we will explain soon. Thus we often treat a code as the same thing as its set of codewords. That is (abusing terminology by using “C” twice): So, for example, if we write “ ”, this means that is a codeword of (and that we are ignoring its corresponding message).  Once a message is encoded into a codeword, it is transmitted through a channel which may change the codeword. The process that changes symbols in a transmitted codeword is called noise. The result is called a received message, which is then decoded to give us a decoded message. Hopefully, the decoded message is the same as the source word, but the errors introduced by noise in the channel may make this impossible! This process is represented by the diagram in Figure . A more concrete example, with a code and codeword, is in Figure .              As the diagrams show, errors in transmission can be a major problem. An error is simply any change that occurs to the codeword as it moves through the channel. This can range from a bit flip (a single 0 changes to 1, or vice versa) to a complete change of the entire codeword.  We will generally study binary codes, in which the codewords consist only of binary digits (bits, 0 or 1). We will also focus on block codes, in which every codeword has the same number of digits, called its length. We will often use the notation or to represent the set of all binary strings of length . These are also called vectors, tuples, or points.    Here is a “2-to-5” code :         00            01            10            11            The set of source words are . We can also write this as . The set of codewords is . Note that , but . We write the code as a table with double arrows to emphasize the fact that every source word corresponds to exactly one codeword, and vice versa (that is, the code is a bijective function). We can describe this code as a “binary block code with block length 5”.    There are two basic ways to handle errors: detect them (that is, determine that they’ve happened) and request a retransmission. Or, correct the error ourselves without asking the sender for any more information.    Detecting errors with parity check bits  A common way to detect errors is the parity check bit. This is simply an extra bit (0 or 1) placed at the end of a codeword. The sender chooses the parity check bit so that the number of 1’s in the codeword is even. The receiver knows this convention and uses it to detect some errors.    Using UTF-8 (Figure ), suppose we want to send the message “SMILE” (as you did in the daily prep). We encode the message one letter at a time. For each letter, we look at each codeword and determine the number of 1’s already in it. We add a single extra bit so that the total number of 1’s is now even.          letter  codeword  number of 1’s  parity check bit  final codeword    S  01010011  even  0  010100110    M  01001101  even  0  010011010    I  01001001  odd  1  010010011    L  01001100  odd  1  010011001    E  01000101  odd  1  010001011     Then we concatenate all of the codewords into one long string and transmit it: > 010100110010011010010010011010011001010001011   The channel causes some errors, so the receiver gets this received message: 010101110 010011010 010010011 010011000 010001011   The receiver, knowing to expect codewords of 9 bits each, splits apart the message. The receiver knows that they should find an even number of 1’s in each message. They verify (“check”) this:        received word  number of 1’s  checks?    010101110  odd  no    010011010  even  yes    010010011  even  yes    010011000  odd  no    010001011  even  yes     Now the receiver knows that something went wrong in the 1st and 4th letters. Importantly, they can’t be sure which bit is wrong (you saw an example of this in the daily prep, question 6). So, the receiver asks the sender to retransmit each incorrect letter, and they repeat this process until each received message checks.    Because we are viewing this example from “above” and can see the sender’s intended message, we know that the first letter had a genuine error (in the 6th bit). But the 4th letter had an error in the parity check (9th bit). Thus the “data” (first 8 bits) contained in the 4th letter is correct. But, the receiver has no way of knowing this, so they end up requesting a retransmission of the 4th letter anyhow. Any time we add extra bits in to a message, we give errors another place to occur. Thus, our general goal is to add as few extra bits as possible.  Parity check bits are extremely easy to find and use, but all they can do is tell you that something went wrong – they can’t tell you what went wrong, nor how to fix any errors. This makes parity check bits widely used in situations where it’s easy to request a retransmission. Examples of this include short-length computer wiring in walls, communications between a mouse and a computer, and bar codes. For example, when a bar code fails to scan at a store, you can just re-scan it, or type in the number manually. A non-example includes photos transmitted by a Mars orbiter, which take minutes or even hours to send and can’t easily be retransmitted.    Correcting errors  Next, we look at some ways to actually correct errors. The goal is to give the receiver a way to determine the intended message, without needing a retransmission. Most of this class will be spent developing more complex and effective codes that can correct errors, but first we will start with a small example to demonstrate that error-correction is possible.  The -repetition code is the code in which each bit of the source word is repeated times. More formally, such that ( times). For example, the 3-repetition code is given in Figure      We will encode the UTF-8 message “S” (01010011) using the 3-repetition code:   This is transmitted, and the channel adds some errors:     In each block of 3 bits, we determine whether 0 or 1 is in the majority and use that “majority vote” to correct the errors:              Block  000  110  000  111  001  000  101  111    Majority  0  1  0  1  0  0  1  1     Thus we correctly decode the message as 01010011 .    A 3-repetition code can correct 1 error per block of 3 bits. However, if 2 errors occur within a block, we would “correct” the message incorrectly (that is, if 000 becomes 101 due to two errors, we would think that 101 was really 111 with a single error). This shows that the 3-repetition code can only correct 1 error per block, and no more. We can generalize this to other -repetition codes – see the exercises.  A word on terminology: Up until now, we have used codes which have letters as the possible messages, and binary strings as their codewords. In the example above, we used the code UTF-8 to encode “S” to “01010011”. However, then we applied a second code, the 3-repetition code, to this already encoded message. The 3-repetition code’s messages are just individual bits: 0 or 1. The code words are 3 bits: 000 or 111. Thus we really have two layers of source and codewords.  To simplify this, we only focus on one layer at a time. In this case, we are most interested in the error-correcting layer. Thus, we don’t worry about how “S” got turned into “01010011” (unless we are focusing on that aspect). Instead, we simply assume that the sender wants to send the source message “01010011” (for whatever reason), and then apply the 3-repetition code directly to this message.  Next we build up some concepts related to determining how “good” an error-correcting code is.  One thing to notice about the repetition codes are that they are very inefficient. Every bit is blown up into copies of the same bit. Thus only 1 out of every bits of each codeword is actually meaningful, and the rest is extra copies.  Suppose is a block code. Recall that this means that the code converts -bit messages into -bit codewords. The rate of is defined to be . You can informally think of the rate as being the length of the source words divided by the length of the codewords.    The 3-repetition code can be seen as a map from to . Thus , which indicates that the source words are just 1 digit long (0 and 1). We have , meaning that the codewords (000 and 111) are each 3 digits long. Thus the rate of the 3-repetition code is . We can interpret this as saying that only of each codeword contains actual information, while the rest is added redundancy.    The number of nonzero coordinates in a codeword is called the Hamming weight of and is denoted .    The Hamming weight of is 4, because there are 4 positions that don’t contain a 0. We write .    The Hamming distance between two codewords and , denoted is the number of coordinates in which the codewords differ. The minimum distance of a code is defined to be: In other words, the minimum distance is the smallest distance between any two different codewords in the code. We never compare the distance of a codeword to itself, because always.  Note that Hamming distance and minimum distance only make sense for codewords that have the same number of bits. Thus, from this point on, we will always assume that we are working with a block code (unless otherwise stated).    Consider the 2-to-5 code (it is listed in Example ). We have , because these words differ in 4 positions (the only position they don’t differ in is the last coordinate). We also have and . If we calculate the distance between every pair of distinct words, we find that the smallest value is 3. Thus the minimum distance of is .    The process of decoding that we have seen so far is called nearest-neighbor decoding. In this form of decoding, a received word is compared against all possible codewords. Calculate the distance for each codeword . To choose the correct decoding of , pick the codeword for which is minimum.  This is the same as the decoding algorithm that we saw for the 3-repetition code. You can think of calculating and as getting “votes” for how different is from 000 and 111. The smaller the number of votes, the fewer differences, and hence the more similar the two words are. We choose to decode using the codeword with the fewest differences from .  Of course, this doesn’t work well if more than one codeword gives the same minimum value! We will discuss, in the future, how to design codes to ensure that there is always a unique “nearest neighbor”.    Again using the 2-to-5 code from Example : Suppose we receive . We calculate the distance for each codeword :   Thus the nearest neighbor to is with distance 1, so we correct to , which means we decode as .  On the other hand, if we received , we could do the same calculations to get:   There are two different codewords that give the same minimum value of 2, which means that we don’t know how to decode . This shows that at least 2 errors must have occurred, and that this code can’t always correct 2 errors.  Finally, notice that if we receive a codeword, such as , we will find the smallest distance to be 0.    As the above example demonstrates, the distance between codewords determines whether it is possible to uniquely decode a message that contains errors. If two codewords are “too similar” (have a small distance), then a small number of errors can make it impossible to decide which of the two is the correct way to decode a received message.  The minimum distance of a code can be thought of as describing the “worst case scenario” for decoding.    If a code has minimum distance , then it can correct up to errors using nearest neighbor decoding.     Let be any codeword, and suppose up to errors occur to , leaving us with message that contains errors. In other words,   Let be any other codeword. We will show that the distance between and is greater than the distance between and , which means that nearest neighbor decoding will choose as the correct message.  We know that because every pair of codewords differ in at least positions. Using this fact and the triangle inequality, Using equation eq:2err, we obtain: Rearranging, we have Notice that . Thus is closer to than to for all other codewords . This means that will be correctly decoded to using nearest-neighbor decoding.   (It is worth verifying each of the inequalities above carefully – they’re not obvious!)  This number in Theorem is referred to as the error-correcting power of the code, and we say that the code is an -error correcting code.  Note in Theorem that the phrase “can correct up to errors” means that the code can always correct any pattern of or fewer errors, regardless of which codeword they occur in, or where they occur within the word. If there is even just one pattern of errors in one codeword that cannot be correctly decoded, then the code cannot correct errors.  Two very common ways to apply Theorem are stated in this corollary:    A code with can correct 1 error, and a code with cannot correct any errors.    Also note that, due to the floor in Theorem , codes with sequential odd and even distances, such as and , can correct exactly the same number of errors. We usually aim for the lower odd values when creating codes, since these are (to some extent) more “efficient”.  We end with a bit of notation. A binary block code which has minimum distance and which contains codewords is called a code. For example, the “2-to-5 code” in Figure is a code. The 3-repetition code is a code.     Homework   Computational problems (do one ):     The following message was first written in UTF-8, and then encoded using the 3-repetition code from class. Decode it and write the final message, showing all steps along the way.   000101000111011100000111001111000010000111000111000101000111000000011110     If possible, create a code and explain why it has those parameters. If impossible, explain why it can’t be done. Hint: For simplicity, you can assume the code includes codeword 0000 (why?).     Conceptual problems (do this one):     Let be an integer. Complete the statement of the following theorem, in terms of , and then write a proof:   Theorem: For any integer , the -repetition code has rate      . It can correct up to      errors, and can detect up to      errors.  Be sure to account for the fact that may be even!     "
},
{
  "id": "fig-1simplecode",
  "level": "2",
  "url": "chap-intro-2.html#fig-1simplecode",
  "type": "Example",
  "number": "1",
  "title": "",
  "body": " For example, take this simple rule for turning capital letters and the space character into numbers:   A = 0 B = 1 C = 2 ... Y = 24 Z = 25 space = 26   "
},
{
  "id": "chap-intro-2-3-7",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-7",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": "  The message “HI” is encoded as “7, 8”. If someone sends you “7, 8, 26, 24, 14, 20”, you can decode it to get the message “HI YOU”. Notice how we had to use the 26 to write a space between words – only numbers can be transmitted, so if we don’t encode the space as a number, we end up with “HIYOU”, which is somewhat less than ideal.   "
},
{
  "id": "chap-intro-2-3-8",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-8",
  "type": "Question",
  "number": "3",
  "title": "",
  "body": "  Decode “12,0,19,7,26,8,18,26,5,20,13”. Then encode a short word or phrase of your choosing ( don’t write down its “plain” or unencoded form on the sheet you bring to class).   "
},
{
  "id": "chap-intro-2-3-9",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-9",
  "type": "Question",
  "number": "4",
  "title": "",
  "body": "  Our first code only deals with capital letters and spaces. What else might you want to include in this code, in order to be able to send useful text messages? Design and write down a rule that includes everything you think you will need for a written message. Encode a message that makes use of your additional symbols.   "
},
{
  "id": "fig-1utf8",
  "level": "2",
  "url": "chap-intro-2.html#fig-1utf8",
  "type": "Table",
  "number": "5",
  "title": "",
  "body": "         A  01000001  J  01001010  S  01010011    B  01000010  K  01001011  T  01010100    C  01000011  L  01001100  U  01010101    D  01000100  M  01001101  V  01010110    E  01000101  N  01001110  W  01010111    F  01000110  O  01001111  X  01011000    G  01000111  P  01010000  Y  01011001    H  01001000  Q  01010001  Z  01011010    I  01001001  R  01010010  (space)  00100000    "
},
{
  "id": "chap-intro-2-3-14",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-14",
  "type": "Question",
  "number": "6",
  "title": "",
  "body": "  Suppose you receive this message which is encoded with UTF-8: 0101001101001101010010010100110001000101 Show how to decode it into a common English word.   "
},
{
  "id": "chap-intro-2-3-15",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-15",
  "type": "Question",
  "number": "7",
  "title": "",
  "body": "  Encode a short word or phrase of your choosing with UTF-8.   "
},
{
  "id": "chap-intro-2-3-17",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-17",
  "type": "Question",
  "number": "8",
  "title": "",
  "body": "  Suppose we are using “our first code” (Figure ). You receive this encoded message with all codewords smashed together: 0117020301170 Find at least two different decodings of this. That is, find two different messages that would both encode to this same number. Why is this a problem? Why can’t this happen with UTF-8?   "
},
{
  "id": "chap-intro-2-3-19",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-3-19",
  "type": "Question",
  "number": "9",
  "title": "",
  "body": "  Suppose you receive this message in UTF-8: 01011110 . You can’t decode it – why not? In this message, there has been an error: One of the bits was flipped from 0 to 1 or vice versa. With this information, what might the original message have been? List as many possibilities as you can find using Figure . For each possibility, indicate where the error happened, and what the correct decoding would be.   "
},
{
  "id": "def-code",
  "level": "2",
  "url": "chap-intro-2.html#def-code",
  "type": "Definition",
  "number": "10",
  "title": "",
  "body": "  Let be a set of symbols called messages or source words, and be a set of symbols called codewords. A code is a bijective function .   "
},
{
  "id": "fig1-transmitgeneric",
  "level": "2",
  "url": "chap-intro-2.html#fig1-transmitgeneric",
  "type": "Figure",
  "number": "11",
  "title": "",
  "body": "     "
},
{
  "id": "fig1-transmitexample",
  "level": "2",
  "url": "chap-intro-2.html#fig1-transmitexample",
  "type": "Figure",
  "number": "12",
  "title": "",
  "body": "     "
},
{
  "id": "ex1-2to5",
  "level": "2",
  "url": "chap-intro-2.html#ex1-2to5",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": "  Here is a “2-to-5” code :         00            01            10            11            The set of source words are . We can also write this as . The set of codewords is . Note that , but . We write the code as a table with double arrows to emphasize the fact that every source word corresponds to exactly one codeword, and vice versa (that is, the code is a bijective function). We can describe this code as a “binary block code with block length 5”.   "
},
{
  "id": "chap-intro-2-4-3-3",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-3-3",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": "  Using UTF-8 (Figure ), suppose we want to send the message “SMILE” (as you did in the daily prep). We encode the message one letter at a time. For each letter, we look at each codeword and determine the number of 1’s already in it. We add a single extra bit so that the total number of 1’s is now even.          letter  codeword  number of 1’s  parity check bit  final codeword    S  01010011  even  0  010100110    M  01001101  even  0  010011010    I  01001001  odd  1  010010011    L  01001100  odd  1  010011001    E  01000101  odd  1  010001011     Then we concatenate all of the codewords into one long string and transmit it: > 010100110010011010010010011010011001010001011   The channel causes some errors, so the receiver gets this received message: 010101110 010011010 010010011 010011000 010001011   The receiver, knowing to expect codewords of 9 bits each, splits apart the message. The receiver knows that they should find an even number of 1’s in each message. They verify (“check”) this:        received word  number of 1’s  checks?    010101110  odd  no    010011010  even  yes    010010011  even  yes    010011000  odd  no    010001011  even  yes     Now the receiver knows that something went wrong in the 1st and 4th letters. Importantly, they can’t be sure which bit is wrong (you saw an example of this in the daily prep, question 6). So, the receiver asks the sender to retransmit each incorrect letter, and they repeat this process until each received message checks.   "
},
{
  "id": "chap-intro-2-4-4-4",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-4",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": "  We will encode the UTF-8 message “S” (01010011) using the 3-repetition code:   This is transmitted, and the channel adds some errors:     In each block of 3 bits, we determine whether 0 or 1 is in the majority and use that “majority vote” to correct the errors:              Block  000  110  000  111  001  000  101  111    Majority  0  1  0  1  0  0  1  1     Thus we correctly decode the message as 01010011 .   "
},
{
  "id": "chap-intro-2-4-4-11",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-11",
  "type": "Example",
  "number": "16",
  "title": "",
  "body": "  The 3-repetition code can be seen as a map from to . Thus , which indicates that the source words are just 1 digit long (0 and 1). We have , meaning that the codewords (000 and 111) are each 3 digits long. Thus the rate of the 3-repetition code is . We can interpret this as saying that only of each codeword contains actual information, while the rest is added redundancy.   "
},
{
  "id": "chap-intro-2-4-4-13",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-13",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": "  The Hamming weight of is 4, because there are 4 positions that don’t contain a 0. We write .   "
},
{
  "id": "chap-intro-2-4-4-16",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-16",
  "type": "Example",
  "number": "18",
  "title": "",
  "body": "  Consider the 2-to-5 code (it is listed in Example ). We have , because these words differ in 4 positions (the only position they don’t differ in is the last coordinate). We also have and . If we calculate the distance between every pair of distinct words, we find that the smallest value is 3. Thus the minimum distance of is .   "
},
{
  "id": "chap-intro-2-4-4-20",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-20",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": "  Again using the 2-to-5 code from Example : Suppose we receive . We calculate the distance for each codeword :   Thus the nearest neighbor to is with distance 1, so we correct to , which means we decode as .  On the other hand, if we received , we could do the same calculations to get:   There are two different codewords that give the same minimum value of 2, which means that we don’t know how to decode . This shows that at least 2 errors must have occurred, and that this code can’t always correct 2 errors.  Finally, notice that if we receive a codeword, such as , we will find the smallest distance to be 0.   "
},
{
  "id": "thm1-eccpower",
  "level": "2",
  "url": "chap-intro-2.html#thm1-eccpower",
  "type": "Theorem",
  "number": "20",
  "title": "",
  "body": "  If a code has minimum distance , then it can correct up to errors using nearest neighbor decoding.   "
},
{
  "id": "chap-intro-2-4-4-24",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-24",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be any codeword, and suppose up to errors occur to , leaving us with message that contains errors. In other words,   Let be any other codeword. We will show that the distance between and is greater than the distance between and , which means that nearest neighbor decoding will choose as the correct message.  We know that because every pair of codewords differ in at least positions. Using this fact and the triangle inequality, Using equation eq:2err, we obtain: Rearranging, we have Notice that . Thus is closer to than to for all other codewords . This means that will be correctly decoded to using nearest-neighbor decoding.  "
},
{
  "id": "chap-intro-2-4-4-29",
  "level": "2",
  "url": "chap-intro-2.html#chap-intro-2-4-4-29",
  "type": "Corollary",
  "number": "21",
  "title": "",
  "body": "  A code with can correct 1 error, and a code with cannot correct any errors.   "
},
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for Demo PreTeXt Course (PTX 101, section 007) for Spring 2026. It is a 0 credit course.   Instructor  Prof. Levin, Ross Hall 2240D, oscar.levin@unco.edu .    Student Hours  Tuesday and Friday 10-12 on Zoom    Class meets  MWF 10-11 in Ross 2090    Course Description  This course is entirely fictional. There isn't even a catalog to pull a description from. But if there were, it would have a course description and that course description would be put here for students to read (but likely because the university administration requires it be included in a syllabus).    Prerequisite  TEX 100 or suitable score on the typesetting placement exam.    Textbook and course materials   PreTeXt for Instructors by Oscar Levin. You can view an accessible online copy of this free, open source textbook at .       Course Overview  The goal of this course is to... oh, who am I kidding. This isn't a real course, so why would I spend time writting a course overview? I suppose I should because it helps see an example.  A common thing you might see here is a list of topics we will cover. So the topics we will cover include,   How to write a syllabus in PreTeXt .    How to write worksheets and handouts in PreTeXt     How to spend too much time typing up examples.   There is more we could say here, but for now I will stop.      Assessments and Grades  Your grade in this course will be based on a combination of your effort to master the material and the number of learning targets you master during the course.  Unlike a traditional course in which you earn points for completing various tasks to various levels of success, grading in this course is done using standards based grading . One advantage of this method is that you will have multiple opportunities to demonstrate your mastery of particular standards, and what matters is how many of these standards you demonstrate mastery on by the end of the course.  We call each standard a learning target and list these next.   Learning targets  By the end of this course, you should be able to:   Create a new PreTeXt document, build it into both HTML and PDF output, and deploy it to GitHub Pages.    Organize a PreTeXt document using sections, subsections, and paragraphs.    Make up random learning targets just to demonstrate what they look like.       Assessment of Learning Targets  Three times during the semester we will have an in-class exam. Each exam will be your first opportunity to demonstrate mastery of learning targets related to material we have covered prior to the exam.  If, after completing the exam, there are learning targets from that exam you have not demonstrated mastery on, you may attempt to demonstrate mastery on that target again by taking a quiz during student hours.    Final Exam  The final exam will take place on No day in particular, 2026 . Probably more to say here...    Assessment of Mathematical Engagement  Your level of effort and engagement will be assessed through your participation in class and completion of a variety of homework assignments.   Participation  Every three weeks you will be asked to complete a short self assessment on Canvas measuring your level of participation both in and out of class. This, combined with your attendance and my perception of your level of participation, will be used to determine your participation grade (out of 100).    Daily Prep Assignments  Prior to most classes you will have a short reading assignment or preview activity to complete. These will be graded based on completion.    Practice Problems  To gain procedural fluency in the content of the course, each topic will be accompanied with a small set of practice problems. These will be machine graded, but you can attempt them as many times as you like prior to the due date.    Written Homework  Some description of written homework should go here.       Final Grades  Grades will be computed based on the number of learning targets you have demonstrated mastery on and your level of mathematical engagement, according to the following table.      A  B  C  D    M (or E) level Learning Targets  15  12  9  6    E level Learning Targets  8  5  2  0    Engagement Score  90%  80%  70%  60%    To receive a particular grade, you must meet or exceed the requirements for that grade in all three categories. If you do not meet the requirements for a D , your final grade will be an F.       Course Policies   Attendance  Attendance is expected and critical to your success, and you will be missed if you are absent. Showing up is a key to success in all aspects of life. At the same time, I realize that it may be necessary for you to miss some class meetings due to work, family commitments, and so forth. In that case, let me know of your absence, and we can come up with a plan to help you stay up-to-date.  One important note though: in this class, just like in every other class, missing a day of class, even with a perfectly valid excuse, does not excuse you from learning what was covered that day. As your instructor, I will try to help you catch up, but this will take more work than it would have if you were in class.    Late work  All assignments have due dates; these exist to help you manage your workload and help me manage getting you feedback in a timely manner. To help motivate you to keep these deadlines, turning in your work on or before the due date will have the following benefits:   Approximately 5% free points on the assignment (for most work that I manually grade).    You will be among the first students to receive feedback\/grades on the assignment.    Opportunity to revise submitted work for a better grade.    Less stress about upcoming work and easier\/better learning for the next topic in class.   Additionally, most assignments will have an absolute cut-off for late work one week after the official due date. This is intended to give you a little flexibility but also not let old work pile up on top of you; sometimes it is just better to start with a clean slate and dive into the next thing.  Of course, life can happen and you don't owe me an explanation for why you might occasionally miss a deadline. Just let me know if you will be handing in something late and when I can expect it. This should not occur regularly; if you are having trouble meeting deadlines consistently, let's chat and make a plan.    Classroom Decorum  Please be respectful of your and my time by staying off your cell phones when in class, arriving on time, and not packing up your things before the end of class.  Additionally, we expect that you will treat all members of our course community with respect and kindness. In doing mathematics, or almost anything worth doing in life, you are going to make many errors and false starts while becoming more proficient. Think, for example, of learning to play a musical instrument, or learning an athletic skill, or developing a friendship. We want to establish a classroom atmosphere where the inevitable struggles and mistakes become an opportunity to learn and grow; not an opportunity for embarrassment. Thus, please be constructive and polite in questioning your colleagues in class.    Academic Integrity  Don't cheat! It is expected that members of this class will observe strict policies of academic honesty in every aspect of this course. In particular, you are expected to solve homework problems by yourself or together with your group, and not find solutions online. In general, the university's policies and recommendations for academic misconduct will be followed.    Generative AI  Generative AI tools (such as ChatGPT, Google Gemini, or CoPilot) are everywhere and present exciting opportunities. Some tasks AI can help us with can clear the way for more important things; but AI can also rob us of the opportunity to do the important things ourselves. It is your responsibility to ensure that you use these tools with academic integrity.  What does this mean? Ask yourself what you hope to get out of this course. I really hope your answer involves learning new skills, becoming a better thinker, and understanding mathematics at a deeper level (even if these goals are in service to eventually getting a better paying and more fulfilling job).  AI tools might be able to help you achieve these goals. Here are a few example prompts that you might find useful and are completely inline with these goals.    I am trying to learn the concept . Give me a sample question and ask me to find the answer and explain how I found it to you. Then ask me some followup questions, acting like a student I am tutoring on the topic. Make sure I can explain everything sufficiently so you can understand the concepts involved.      My professor gave me this sample quiz question: . Generate 5 additional questions that are similar in style and difficulty and ask me to give you the answers. Don't give me solutions until I have done so, but point out any errors I might have made.      Here is an example from my textbook: . Make up a similar question and walk me through a solution step my step, asking me to ask questions after each step to make sure I really understand the process.       Warning: As good as AI has become recently, it is still not great at mathematics, so anything you get out of a generative AI tool should be approached with a fair amount of skepticism. This is also a good way to learn mathematics though: play find the mistake in what AI gives you!  To be clear, you should NOT use AI tools to shortcut the learning process. Getting someone else to do your work for you (even if that someone is a robot) is plagiarism and a violation of the academic integrity policy. If you have any doubt about whether you are using AI productively, I'd love to have a conversation about it with you.    "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Demo PreTeXt Course (PTX 101, section 007) "
},
{
  "id": "sec-assessments-3",
  "level": "2",
  "url": "syllabus.html#sec-assessments-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standards based grading "
},
{
  "id": "sec-assessments-4",
  "level": "2",
  "url": "syllabus.html#sec-assessments-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "learning target "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24    The region bounded by and the -axis between and . Rotate around the -axis.    The region bounded by , the -axis, and . Rotate around the -axis.    The region bounded by and the -axis between and . Rotate around the -axis.    The region enclosed by and . Rotate around the line .    Challenge 1: Repeat #4, but rotate around the line .    Challenge 2: The 3D shape whose cross sections perpendicular to the -axis are squares with side length , from to .        Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Part 1     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
