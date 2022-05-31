
import testApi from './testApi';

    var test = [
      {
        _id: '6284767745ef66ba807bbccf',
        title: 'Tai',
        author: 'hello',
        source: 'idk',
        year: 'idk',
        doi: 'idk',
        claimed: '124easasdqw',
        evidence: 'hahaha',
        __v: 0
      },
      {
        _id: '628476c6de027a2a0e309f6b',
        title: 'Tai',
        author: 'is',
        source: 'testing',
        year: 'another',
        doi: 'bug',
        claimed: 'hope',
        evidence: 'it is fine',
        __v: 0
      },
      {
        _id: '62848ff02f87194e61237667',
        title: 'Bool test',
        author: 'hello ',
        source: 'this',
        year: 'is',
        doi: 'a ',
        claimed: 'test',
        evidence: '!!',
        moderated: false,
        analyzed: false,
        __v: 0
      },
      {
        _id: '62849d962ee96f21a716861e',
        title: '母猪的产后护理',
        author: '徐枫',
        source: '哈哈哈',
        year: '我不道啊',
        doi: '你猜捏',
        claimed: '铁子',
        evidence: '好果汁你让我陷入疯狂',
        moderated: false,
        analyzed: false,
        __v: 0
      },
      {
        _id: '6284dd5bda57271644c2f9b7',
        title: 'test of haha',
        author: 'pqwej',
        source: 'aldj',
        year: 'adxzc',
        doi: '314-1',
        claimed: '0-19541-34',
        evidence: '12094u1-0',
        moderated: false,
        analyzed: false,
        __v: 0
      }
    ]
    it('api testing', async function () {
      const response = new testApi();
      console.log(await response.api());
      var data = await response.api();
      expect(data).toEqual(test);
    });


