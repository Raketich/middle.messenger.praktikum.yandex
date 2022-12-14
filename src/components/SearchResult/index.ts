import Block from '../../common/Block/Block';
import { UserData } from '../../api/AuthApi';

export interface SearchResultProps {
  onUserClick: () => void;
  onAddUsers: ([]) => void;
  result: (UserData & { active: boolean })[];
}

export default class SearchResult extends Block<SearchResultProps> {
  constructor(props: SearchResultProps) {
    super(props);
  }

  static getName() {
    return 'SearchResult';
  }

  render() {
    return `
        <div>
            {{#each result}}
                {{{ ChatFoundUser hideOpts=true hideMessage=true user=this onClick=../onUserClick}}}
            {{/each}}
        </div>
    `;
  }
}
