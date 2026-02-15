import type { ProjectPost } from "./types";

export const universityEngineeringLabsProjectPost: ProjectPost = {
  slug: "university-engineering-labs",
  title: "University Engineering Labs: Crypto, Mobile, and C++ Design",
  subtitle:
    "A technical compilation of university projects across C cryptography, Android peer-to-peer messaging, and C++ interpreter design.",
  date: "2026-02-15",
  readTime: "8 min read",
  summary:
    "This article consolidates three university projects I still consider technically important: BigNumbers (C, arbitrary-precision arithmetic and RSA), Super Proximity Messenger (Android + Nearby Connections), and PB161_Cplusplus (interpreter/game assignments with stricter parsing and OOP patterns).",
  externalReference: {
    label: "BigNumbers repository",
    href: "https://github.com/xmoravec/BigNumbers",
  },
  tags: ["C", "Java", "C++", "Cryptography", "Android", "University"],
  previewCode: `bignum *bignum_add(bignum *a, bignum *b) {
  bignum *c = bignum_new();
  c->size = max(a->size, b->size) + 1;
  c->tab = realloc(c->tab, c->size * sizeof(int));

  int carry = 0;
  for (int i = 0; i < c->size - 1; i++) {
    int tmp = a->tab[a->size - i - 1] + b->tab[b->size - i - 1] + carry;
    carry = tmp / B;
    c->tab[c->size - i - 1] = tmp % B;
  }
  c->tab[0] = carry;
  return c;
}`,
  goals: [
    "Build practical low-level intuition for memory, data representation, and arithmetic correctness in C.",
    "Implement real asynchronous communication behavior on Android using Nearby Connections API.",
    "Design parser/interpreter logic in C++ with strict validation and predictable error handling.",
  ],
  architecture: [
    "BigNumbers (C, April 2021, collaborative): custom BigNum structure with base-10 digits in integer arrays, conversion helpers, and modular arithmetic utilities for cryptographic operations.",
    "Super Proximity Messenger (Java, May 2021): host/client architecture around Nearby advertising + discovery flows, with connectivity logic separated from UI activities.",
    "PB161_Cplusplus (C++, July 2023): progressively more complex tasks including interpreter-like command processing, object-oriented gameplay structure, and design-pattern practice.",
    "Additional references: CosmosDB-Flask-Mongo-Sample (fork, April 2023) — https://github.com/xmoravec/CosmosDB-Flask-Mongo-Sample",
    "Additional references: 2019-pb162-seminar-project (Java, July 2023) — https://github.com/xmoravec/2019-pb162-seminar-project",
  ],
  shippedFeatures: [
    "BigNumbers: add/subtract/multiply with carry handling, addmod/multmod/expmod helpers, Fermat primality test, random prime generation, and RSA keygen/encrypt/decrypt flow.",
    "BigNumbers conversion helpers: string ↔ BigNum, integer conversions, and utility testing with larger computed values.",
    "Messenger: RecyclerView-based chat UI, endpoint lifecycle management, JSON message serialization, and profile/theme persistence.",
    "C++ coursework: procedural instruction parsing, validation/complaint strategy, and reference checks for defined procedures.",
    "Repository links: https://github.com/xmoravec/BigNumbers · https://github.com/xmoravec/MICS2-50-Super-Proximity-Messenger · https://github.com/xmoravec/PB161_Cplusplus",
  ],
  currentFocus: [
    "Extract reusable patterns from these repositories into cleaner modern writeups and selected refactors.",
    "Preserve technical history while presenting architecture and trade-offs in a clearer portfolio style.",
    "Add representative screenshots and benchmark notes where they increase signal for reviewers.",
  ],
  codeSamples: [
    {
      title: "bignum-string-and-addition.c",
      code: `bignum *bignum_fromstring(char *str) {
  bignum* num = bignum_new();
  bignum_enlarge(num, strlen(str));
  for (unsigned int i = 0; i < strlen(str); i++) {
    num->tab[i] = str[i] - '0';
  }
  return num;
}

bignum *bignum_add(bignum *a, bignum *b) {
  bignum *c = bignum_new();
  c->size = max(a->size, b->size) + 1;
  c->tab = realloc(c->tab, c->size * sizeof(int));

  int j = a->size;
  int l = b->size;
  int k = c->size;
  int carry = 0;
  int tmp = 0;

  for (int i = 0; i < l; i++) {
    tmp = a->tab[j - i - 1] + b->tab[l - i - 1] + carry;
    carry = tmp / B;
    c->tab[k - i - 1] = tmp % B;
  }
  for (int i = l; i < k - 1; i++) {
    tmp = a->tab[j - i - 1] + carry;
    carry = tmp / B;
    c->tab[k - i - 1] = tmp % B;
  }
  c->tab[0] = carry;
  if(c->tab[0] == 0) {
    c->tab++;
    c->size--;
  }
  return c;
}`,
    },
    {
      title: "chat-adapter.java",
      code: `public class ChatAdapter extends RecyclerView.Adapter<ChatAdapter.ChatHolder> {

  private final LayoutInflater inflater;
  private final List<Message> messages;

  public ChatAdapter(Context context, List<Message> messages) {
    inflater = LayoutInflater.from(context);
    this.messages = messages;
  }

  public void addMessage(Message message) {
    messages.add(messages.size(), message);
    notifyDataSetChanged();
  }

  @Override
  public int getItemViewType(int position) {
    return messages.get(position).isMyChat() ? 0 : 1;
  }

  static class ChatHolder extends RecyclerView.ViewHolder {
    private final TextView messageText;
    private final TextView userText;
    private final TextView timestamp;

    public void bind(Message message) {
      messageText.setText(message.getMessage());
      if (!message.isMyChat()) userText.setText(message.getEndpoint().getName());
      Date date = new Date();
      date.setTime(message.getTimestamp());
      timestamp.setText(new SimpleDateFormat("EEE, MMM d, h:mm a").format(date));
    }
  }
}`,
    },
    {
      title: "procedure-validation.cpp",
      code: `void Program::read_inst(const std::vector<std::string>& words, Procedure& proc) {
  if (words.size() == 1) {
    if (is_jumpinst(words[0]) || !allowed_characters(words[0]))
      Complain::invalidSource(line_count, "If without parameter or invalid character\\n");
    if (is_inst(words[0]) || has_procedure(words[0]))
      proc.instructions.push_back(words[0]);
    else
      Complain::undefinedReference(proc.name, words[0], words[0], " is undefined\\n");
  }
}

bool Program::has_procedure(const std::string& name) const {
  for (auto& p : procedures) {
    if (p.name == name) {
      return true;
    }
  }
  return false;
}`,
    },
  ],
};
