import Board from '../Board';
import Guide from '../Guide';

function Puzzle() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>
                <Guide></Guide>
              </td>
            </tr>
            <tr>
              <td>
                <Guide></Guide>
              </td>
              <td>
                <Board></Board>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Puzzle;